import { ChatRequestOptions } from 'ai';
import React from 'react';

interface QuestionInputProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (event?: {
    preventDefault?: () => void;
  }, chatRequestOptions?: ChatRequestOptions) => void;
}

export function QuestionInput({ handleInputChange, handleSubmit }: QuestionInputProps) {
  return (
    <form onSubmit={handleSubmit} 
      className="flex flex-col justify-center mt-7 max-w-full text-lg text-stone-300 w-[778px]">
      <div className="flex gap-5 px-6 py-5 rounded-lg border-2 border-cyan-600 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <label htmlFor="questionInput" className="sr-only">Ask a question</label>
        <input
          type="text"
          id="questionInput"
          placeholder="Ask a question"
          className="flex-auto bg-transparent border-none outline-none"
          onChange={handleInputChange}
        />
        <button type="submit" aria-label="Submit question">
          <img loading="lazy" src="/images/submit.svg" alt="" className="shrink-0 self-start aspect-[1.25] fill-cyan-600 w-[25px]" />
        </button>
      </div>
    </form>
  );
};

