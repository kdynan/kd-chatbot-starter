import React from 'react';
import {SuggestedQuestion} from './SuggestedQuestion';

interface SuggestedQuestionsListProps {
  questions: string[];
}

export const SuggestedQuestionsList: React.FC<SuggestedQuestionsListProps> = ({ questions }) => {
  return (
    <div className="flex flex-col items-center">
      <img loading="lazy" src="/images/e2c_large.svg" alt="" className="mt-8 aspect-square fill-cyan-600 w-[92px] max-md:mt-10 justify-center" />
      <h1 className="mt-6 font-medium text-black">How can I help you today?</h1>
      <div className="mx-auto sm:max-w-2xl sm:px-4">
      <h2 className="mt-10 font-medium text-black max-md:mt-10 text-center">Suggested Questions</h2>
      
      <div className="mb-4 grid grid-cols-2 gap-3 px-4 sm:px-0 text-white">
        {questions.map((question, index) => (
          <SuggestedQuestion key={index} question={question} />
        ))}
      </div>
      </div>
    </div>
  );
};