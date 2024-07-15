
import React from 'react';

interface SuggestedQuestionProps {
  question: string;
}

export const SuggestedQuestion: React.FC<SuggestedQuestionProps> = ({ question }) => {
  return (
    <div className="grow justify-center p-6 bg-cyan-600 rounded-lg shadow-sm w-fit max-md:px-5">
      {question}
    </div>
  );
};
