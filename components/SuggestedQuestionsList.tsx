import React from 'react';
import {SuggestedQuestion} from './SuggestedQuestion';
import { useEffect } from 'react';
interface SuggestedQuestionsListProps {
  questions: string[];
}

export const SuggestedQuestionsList: React.FC<SuggestedQuestionsListProps> = ({ questions }) => {
  
  const [examples, setExamples] = React.useState<[string]>(['']);
  
  useEffect(() => {
    
    async function fetchExamples()  {
      const response = await fetch('/api/examples');
      const data = await response.json();
      
      setExamples(data.response.examples);
      console.log(data.response.examples);
      
    }

    fetchExamples();

  }, []);
  
  return (
    <div className="flex flex-col items-center">
      <img loading="lazy" src="/images/e2c_large.svg" alt="" className="mt-8 aspect-square fill-cyan-600 w-[92px] max-md:mt-10 justify-center" />
      <h1 className="mt-6 font-medium text-black">How can I help you today?</h1>
      <div className="mx-auto sm:max-w-2xl sm:px-4">
      <h2 className="mt-10 font-medium text-black max-md:mt-10 text-center">Suggested Questions</h2>
      
      <div className="mb-4 grid grid-cols-2 gap-3 px-4 sm:px-0 text-white">
        {examples.map((question, index) => (
          <SuggestedQuestion key={index} question={question} />
        ))}
      </div>
      </div>
    </div>
  );
};