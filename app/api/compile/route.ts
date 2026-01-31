import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { existsSync } from 'fs';

const execAsync = promisify(exec);

interface CompileRequest {
  code: string;
  input?: string;
}

interface CompileResult {
  success: boolean;
  output?: string;
  error?: string;
  stage?: 'compile' | 'runtime' | 'system';
}

export async function POST(request: NextRequest) {
  let cFilePath = '';
  let exeFilePath = '';

  try {
    const body: CompileRequest = await request.json();
    const { code, input = '' } = body;

    if (!code) {
      return NextResponse.json({
        success: false,
        error: '코드가 제공되지 않았습니다.',
        stage: 'system'
      } as CompileResult, { status: 400 });
    }

    // Create temp directory if not exists
    const tempDir = path.join(process.cwd(), 'temp');
    if (!existsSync(tempDir)) {
      await fs.mkdir(tempDir, { recursive: true });
    }

    const fileId = uuidv4();
    cFilePath = path.join(tempDir, `${fileId}.c`);
    exeFilePath = path.join(tempDir, `${fileId}${process.platform === 'win32' ? '.exe' : ''}`);

    // Write C code to file
    await fs.writeFile(cFilePath, code);

    try {
      // Compile the C code
      const { stderr: compileStderr } = await execAsync(`gcc "${cFilePath}" -o "${exeFilePath}"`);

      if (compileStderr) {
        // GCC warnings are sent to stderr but compilation might still succeed
        // Only fail if the executable wasn't created
        if (!existsSync(exeFilePath)) {
          await cleanup();
          return NextResponse.json({
            success: false,
            error: compileStderr,
            stage: 'compile'
          } as CompileResult);
        }
      }

      // Execute the compiled program with timeout
      try {
        let execCommand = `"${exeFilePath}"`;

        // If input is provided, echo it and pipe to the program
        if (input) {
          if (process.platform === 'win32') {
            execCommand = `echo ${input} | "${exeFilePath}"`;
          } else {
            execCommand = `echo "${input}" | "${exeFilePath}"`;
          }
        }

        const { stdout, stderr } = await execAsync(execCommand, {
          timeout: 5000,
          maxBuffer: 1024 * 1024 // 1MB buffer
        });

        const output = stdout || stderr;

        await cleanup();

        return NextResponse.json({
          success: true,
          output: output
        } as CompileResult);

      } catch (runError: any) {
        await cleanup();

        if (runError.killed || runError.signal === 'SIGTERM') {
          return NextResponse.json({
            success: false,
            error: '프로그램 실행 시간이 초과되었습니다 (5초 제한)',
            stage: 'runtime'
          } as CompileResult);
        }

        return NextResponse.json({
          success: false,
          error: runError.stderr || runError.message,
          output: runError.stdout,
          stage: 'runtime'
        } as CompileResult);
      }

    } catch (compileError: any) {
      await cleanup();
      return NextResponse.json({
        success: false,
        error: compileError.stderr || compileError.message,
        stage: 'compile'
      } as CompileResult);
    }

  } catch (error: any) {
    await cleanup();
    return NextResponse.json({
      success: false,
      error: error.message || 'Unknown error occurred',
      stage: 'system'
    } as CompileResult, { status: 500 });
  }

  async function cleanup() {
    try {
      if (cFilePath) {
        await fs.unlink(cFilePath).catch(() => {});
      }
      if (exeFilePath) {
        await fs.unlink(exeFilePath).catch(() => {});
      }
    } catch (err) {
      console.error('파일 정리 실패:', err);
    }
  }
}
