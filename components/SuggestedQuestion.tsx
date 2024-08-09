
import React from 'react';

interface SuggestedQuestionProps {
  question: string;
  onQuestionClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const SuggestedQuestion: React.FC<SuggestedQuestionProps> = ({ question, onQuestionClick }) => {
  return (
    <div onClick={onQuestionClick} className=" justify-center p-4 bg-cyan-600 rounded-lg shadow-sm text-sm max-md:px-5 hover:bg-cyan-800">
      {question}
    </div>
  );
};
