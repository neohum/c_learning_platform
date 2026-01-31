import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

interface HealthResponse {
  status: string;
  message: string;
  gcc?: boolean;
}

export async function GET() {
  try {
    // Check if GCC is available
    await execAsync('gcc --version');

    return NextResponse.json({
      status: 'ok',
      message: 'C Learning Platform API is running',
      gcc: true
    } as HealthResponse);
  } catch {
    return NextResponse.json({
      status: 'ok',
      message: 'C Learning Platform API is running',
      gcc: false
    } as HealthResponse);
  }
}
