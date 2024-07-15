import React from 'react';
import {SuggestedQuestion} from './SuggestedQuestion';

interface SuggestedQuestionsListProps {
  questions: string[];
}

export const SuggestedQuestionsList: React.FC<SuggestedQuestionsListProps> = ({ questions }) => {
  return (
    <section>
      <h2 className="mt-44 font-medium text-black max-md:mt-10 text-center">Suggested Questions</h2>
      <div className="flex flex-wrap gap-2.5 mt-4 max-w-full text-white w-[778px]">
        {questions.map((question, index) => (
          <SuggestedQuestion key={index} question={question} />
        ))}
      </div>
    </section>
  );
};