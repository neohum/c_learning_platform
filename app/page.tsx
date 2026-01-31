'use client';

import { useState, useEffect } from 'react';
import { CodeEditor } from '@/components/CodeEditor';
import { TutorialContent } from '@/components/TutorialContent';
import { OutputPanel } from '@/components/OutputPanel';
import { LessonNavigator } from '@/components/LessonNavigator';
import { lessons } from '@/data/lessons';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { compileAndRun, checkHealth } from '@/lib/api';
import type { CompileResult, LessonProgress } from '@/lib/types';

export default function Home() {
  const [currentLessonId, setCurrentLessonId] = useLocalStorage<string>(
    'currentLessonId',
    lessons[0]?.id || ''
  );
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [compileResult, setCompileResult] = useState<CompileResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [serverStatus, setServerStatus] = useState<boolean | null>(null);
  const [progress, setProgress] = useLocalStorage<Record<string, LessonProgress>>(
    'lessonProgress',
    {}
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isOutputModalOpen, setIsOutputModalOpen] = useState(false);

  const currentLesson = lessons.find((l) => l.id === currentLessonId);
  const currentStep = currentLesson?.steps?.[currentStepIndex];

  // 서버 상태 체크
  useEffect(() => {
    checkHealth().then(setServerStatus);
  }, []);

  // 레슨이 바뀔 때 진행 상황 불러오기
  useEffect(() => {
    if (currentLesson) {
      const savedProgress = progress[currentLesson.id];
      if (savedProgress) {
        setCurrentStepIndex(savedProgress.currentStep);
        setUserCode(savedProgress.userCode || currentLesson.steps?.[0]?.code || currentLesson.finalCode || '');
      } else {
        setCurrentStepIndex(0);
        setUserCode(currentLesson.steps?.[0]?.code || currentLesson.finalCode || '');
      }
    }
  }, [currentLessonId, currentLesson]);

  // 스텝이 바뀔 때 코드 업데이트
  useEffect(() => {
    if (currentStep) {
      setUserCode(currentStep.code);
    }
  }, [currentStepIndex, currentStep]);

  // 진행 상황 저장
  const saveProgress = () => {
    if (currentLesson) {
      setProgress((prev) => ({
        ...prev,
        [currentLesson.id]: {
          lessonId: currentLesson.id,
          currentStep: currentStepIndex,
          completed: currentStepIndex >= (currentLesson.steps?.length ?? 1) - 1,
          userCode,
          lastAccessed: Date.now(),
        },
      }));
    }
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setCompileResult(null);
    setIsOutputModalOpen(true);

    try {
      const result = await compileAndRun(userCode);
      setCompileResult(result);
    } catch (error) {
      setCompileResult({
        success: false,
        error: '실행 중 오류가 발생했습니다.',
        stage: 'system',
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleNextStep = () => {
    if (currentLesson && currentStepIndex < (currentLesson.steps?.length ?? 1) - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      saveProgress();
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      saveProgress();
    }
  };

  const handleShowFinalCode = () => {
    if (currentLesson?.finalCode) {
      setUserCode(currentLesson.finalCode);
    }
  };

  if (!currentLesson) {
    return <div>레슨을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="app">
      <button
        className="menu-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="메뉴 토글"
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <LessonNavigator
          lessons={lessons}
          currentLessonId={currentLessonId}
          onSelectLesson={(id) => {
            setCurrentLessonId(id);
            setIsSidebarOpen(false);
          }}
        />
      </div>

      <div className="main-content">
        {serverStatus === false && (
          <div className="server-warning">
            ⚠️ 백엔드 서버에 연결할 수 없습니다. GCC가 설치되어 있는지 확인하세요.
          </div>
        )}

        <div className="lesson-header">
          <h1>{currentLesson.title}</h1>
          <div className="concepts">
            {currentLesson.concepts.map((concept: string, idx: number) => (
              <span key={idx} className="concept-badge">
                {concept}
              </span>
            ))}
          </div>
        </div>

        {currentLesson.gameRules && (
          <div className="game-rules">
            <pre>{currentLesson.gameRules}</pre>
          </div>
        )}

        {currentLesson.steps && (
          <div className="step-indicator">
            Step {currentStepIndex + 1} / {currentLesson.steps.length}
          </div>
        )}

        {currentStep && (
          <>
            <TutorialContent explanation={currentStep.explanation} />

            <div className="code-section">
              <div className="code-header">
                <h3>코드 에디터</h3>
                <div className="code-actions">
                  <button
                    onClick={handleRunCode}
                    disabled={isRunning || serverStatus === false}
                    className="btn btn-run"
                  >
                    ▶️ 실행
                  </button>
                  <button onClick={handleShowFinalCode} className="btn btn-secondary">
                    📝 최종 코드 보기
                  </button>
                </div>
              </div>
              <CodeEditor
                code={userCode}
                onChange={(value) => setUserCode(value || '')}
                highlights={currentStep.highlights}
              />
            </div>

            <div className="navigation">
              <button
                onClick={handlePrevStep}
                disabled={currentStepIndex === 0}
                className="btn btn-nav"
              >
                ⬅️ 이전
              </button>
              <button onClick={saveProgress} className="btn btn-secondary">
                💾 진행 상황 저장
              </button>
              <button
                onClick={handleNextStep}
                disabled={currentStepIndex >= (currentLesson.steps?.length ?? 1) - 1}
                className="btn btn-nav"
              >
                다음 ➡️
              </button>
            </div>

            {currentStepIndex === (currentLesson.steps?.length ?? 1) - 1 &&
              currentLesson.challenge && (
                <div className="challenge">
                  <h3>🎯 도전 과제</h3>
                  <pre>{currentLesson.challenge}</pre>
                  {currentLesson.solution && (
                    <details>
                      <summary>💡 해답 보기</summary>
                      <pre>{currentLesson.solution}</pre>
                    </details>
                  )}
                </div>
              )}
          </>
        )}
      </div>

      {isOutputModalOpen && (
        <div className="modal-overlay" onClick={() => setIsOutputModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>실행 결과</h2>
              <button
                className="modal-close"
                onClick={() => setIsOutputModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <OutputPanel result={compileResult} isRunning={isRunning} />
          </div>
        </div>
      )}
    </div>
  );
}
