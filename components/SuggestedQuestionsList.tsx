
import React from 'react';
import {SuggestedQuestion} from './SuggestedQuestion';
import { useEffect, useState } from 'react';
import useSWR from 'swr';


interface SuggestedQuestionsListProps {
  inputRef : React.MutableRefObject<HTMLInputElement | null>,
  submitRef : React.MutableRefObject<HTMLButtonElement | null>
}

export function SuggestedQuestionsList({ inputRef, submitRef } : SuggestedQuestionsListProps) {
  const [loading, setLoading] = useState(true);
  
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  
  //const { data, error } = useSWR('/api/examples', fetcher);

  //const newexamples = data?.response.examples as string[];


  const [examples, setExamples] = React.useState<[string]|null>(null);

  function onQuestionClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log('Question clicked:', event.currentTarget.innerText);
  
    inputRef.current!.value = event.currentTarget.innerText;

    submitRef.current!.click();
    
  }
  useEffect(() => {
    
    async function fetchExamples()  {
      const response = await fetch('/api/examples/4');
      const data = await response.json();

     setExamples(data.response.examples);
     setLoading(false);
      
    }

   fetchExamples()

  }, []);
  
  return (
    <div className="flex flex-col items-center">
      <img loading="lazy" src="/images/e2c_large.svg" alt="" className="mt-8 aspect-square fill-cyan-600 w-[92px] max-md:mt-10 justify-center" />
      <h1 className="mt-6 font-medium text-black">How can I help you today?</h1>
      <div className="mx-auto sm:max-w-2xl sm:px-4">
      <h2 className="mt-10 font-medium text-black max-md:mt-10 text-center">Suggested Questions</h2>
      
      {loading && <div className="mt-4 text-center text-zinc-500">Loading Suggested Questions...</div>}

      
      <div className="mb-4 grid grid-cols-2 gap-3 px-4 sm:px-0 text-white">
        {examples?.map((question, index) => (
          <SuggestedQuestion key={index} question={question} onQuestionClick={onQuestionClick} />
        ))}
      </div>
      </div>
    </div>
  );
};