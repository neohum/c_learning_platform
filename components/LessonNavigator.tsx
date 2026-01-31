'use client';

import type { Lesson } from '@/lib/types';

interface LessonNavigatorProps {
  lessons: Lesson[];
  currentLessonId: string;
  onSelectLesson: (lessonId: string) => void;
}

export const LessonNavigator = ({
  lessons,
  currentLessonId,
  onSelectLesson,
}: LessonNavigatorProps) => {
  const categories = {
    beginner: { title: '🔰 입문자', emoji: '🎮' },
    intermediate: { title: '💪 중급자', emoji: '🗂' },
    advanced: { title: '🧠 고급자', emoji: '🧵' },
  };

  return (
    <div className="lesson-navigator">
      <h2>C 언어 학습 플랫폼</h2>
      {Object.entries(categories).map(([category, { title }]) => {
        const categoryLessons = lessons.filter((l) => l.category === category);
        if (categoryLessons.length === 0) return null;

        return (
          <div key={category} className="category">
            <h3>{title}</h3>
            <div className="lesson-list">
              {categoryLessons.map((lesson) => (
                <button
                  key={lesson.id}
                  className={`lesson-item ${
                    lesson.id === currentLessonId ? 'active' : ''
                  }`}
                  onClick={() => onSelectLesson(lesson.id)}
                >
                  <div className="lesson-title">{lesson.title}</div>
                  <div className="lesson-description">{lesson.description}</div>
                </button>
              ))}
            </div>
          </div>
        );
      })}
      <style>{`
        .lesson-navigator {
          background: #2d2d30;
          color: white;
          padding: 25px;
          height: 100vh;
          overflow-y: auto;
          border-right: 1px solid #3e3e42;
        }

        .lesson-navigator h2 {
          margin: 0 0 30px 0;
          font-size: 24px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .category {
          margin-bottom: 30px;
        }

        .category h3 {
          margin: 0 0 15px 0;
          font-size: 16px;
          color: #4a9eff;
        }

        .lesson-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .lesson-item {
          background: #3e3e42;
          border: 2px solid transparent;
          padding: 15px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
          color: white;
        }

        .lesson-item:hover {
          background: #4e4e52;
          border-color: #667eea;
        }

        .lesson-item.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: #667eea;
        }

        .lesson-title {
          font-weight: bold;
          margin-bottom: 5px;
          font-size: 14px;
        }

        .lesson-description {
          font-size: 12px;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};
