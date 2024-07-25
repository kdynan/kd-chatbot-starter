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
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b132fc3fea614364bd6f3a957fec28e477bd9774e7655738c3021ccf0c5b187?apiKey=48e0882be7cc4391993150eb17882064&" alt="" className="shrink-0 self-start aspect-[1.25] fill-cyan-600 w-[25px]" />
        </button>
      </div>
    </form>
  );
};

