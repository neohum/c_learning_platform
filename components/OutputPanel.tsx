'use client';

import type { CompileResult } from '@/lib/types';

interface OutputPanelProps {
  result: CompileResult | null;
  isRunning: boolean;
}

export const OutputPanel = ({ result, isRunning }: OutputPanelProps) => {
  return (
    <div className="output-panel">
      <h3>실행 결과</h3>
      <div className="output-content">
        {isRunning ? (
          <div className="loading">
            <span className="spinner"></span>
            컴파일 및 실행 중...
          </div>
        ) : result ? (
          <div>
            {result.success ? (
              <div className="success">
                <div className="status">✅ 실행 성공</div>
                <pre>{result.output}</pre>
              </div>
            ) : (
              <div className="error">
                <div className="status">
                  ❌ {result.stage === 'compile' ? '컴파일' : '실행'} 에러
                </div>
                <pre>{result.error}</pre>
              </div>
            )}
          </div>
        ) : (
          <div className="placeholder">
            코드를 실행하면 결과가 여기에 표시됩니다.
          </div>
        )}
      </div>
      <style>{`
        .output-panel {
          background: #1e1e1e;
          color: #d4d4d4;
          padding: 20px;
          border-radius: 8px;
          margin-top: 20px;
        }

        .output-panel h3 {
          margin: 0 0 15px 0;
          color: #fff;
          font-size: 18px;
        }

        .output-content {
          background: #252526;
          padding: 15px;
          border-radius: 6px;
          min-height: 150px;
          font-family: 'Consolas', 'Monaco', monospace;
          font-size: 14px;
        }

        .loading {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #4a9eff;
        }

        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 3px solid #333;
          border-top-color: #4a9eff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .success .status {
          color: #4ec9b0;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .error .status {
          color: #f48771;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .output-content pre {
          margin: 0;
          white-space: pre-wrap;
          word-wrap: break-word;
          color: #d4d4d4;
        }

        .placeholder {
          color: #6a6a6a;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};
