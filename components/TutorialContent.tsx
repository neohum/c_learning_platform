'use client';

import { useTypingEffect } from '@/hooks/useTypingEffect';

interface TutorialContentProps {
  explanation: string;
  enableTyping?: boolean;
}

export const TutorialContent = ({
  explanation,
  enableTyping = true,
}: TutorialContentProps) => {
  const { displayedText, isTyping } = useTypingEffect(
    explanation,
    20,
    enableTyping
  );

  return (
    <div className="tutorial-content">
      <div className="explanation">
        {displayedText.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        {isTyping && <span className="cursor">▋</span>}
      </div>
      <style>{`
        .tutorial-content {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          min-height: 200px;
          margin-bottom: 20px;
        }

        .explanation {
          font-size: 16px;
          line-height: 1.8;
          white-space: pre-wrap;
        }

        .explanation p {
          margin: 10px 0;
        }

        .cursor {
          display: inline-block;
          animation: blink 1s infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};
