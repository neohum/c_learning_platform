import type { CompileResult } from './types';

export const compileAndRun = async (
  code: string,
  input?: string
): Promise<CompileResult> => {
  try {
    const response = await fetch('/api/compile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
        input: input || '',
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: CompileResult = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      error: `컴파일 오류: ${error}`,
      stage: 'system',
    };
  }
};

export const checkHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch('/api/health');

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data.gcc === true;
  } catch {
    return false;
  }
};
