import React from 'react';
import {SuggestedQuestion} from './SuggestedQuestion';

interface SuggestedQuestionsListProps {
  questions: string[];
}

export const SuggestedQuestionsList: React.FC<SuggestedQuestionsListProps> = ({ questions }) => {
  return (
    <section>
      <h2 className="mt-10 font-medium text-black max-md:mt-10 text-center">Suggested Questions</h2>
      <div className="mx-auto sm:max-w-2xl sm:px-4">
      <div className="mb-4 grid grid-cols-2 gap-2 px-4 sm:px-0 text-white">
        {questions.map((question, index) => (
          <SuggestedQuestion key={index} question={question} />
        ))}
      </div>
      </div>
    </section>
  );
};