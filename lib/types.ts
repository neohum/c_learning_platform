export interface CodeStep {
  code: string;
  explanation: string;
  highlights?: number[]; // 강조할 라인 번호들
}

export interface Lesson {
  id: string;
  title: string;
  category: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  gameRules?: string; // 게임 룰 및 목표 설명
  concepts: string[];
  steps?: CodeStep[];
  finalCode: string;
  challenge?: string;
  solution?: string;
}

export interface LessonProgress {
  lessonId: string;
  currentStep: number;
  completed: boolean;
  userCode?: string;
  lastAccessed: number;
}

export interface CompileResult {
  success: boolean;
  output?: string;
  error?: string;
  stage?: 'compile' | 'runtime' | 'system';
}
