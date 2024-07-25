'use client';

import { useChat } from 'ai/react';
import React from 'react';
import {SuggestedQuestionsList} from '../components/SuggestedQuestionsList';
import {QuestionInput} from '../components/QuestionInput';

export default function MainContent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const suggestedQuestions = [
    "Has student attendance bounced back after COVID?",
    "What was student attendance in 2023?",
    "Number of students applied college in the Boston in 2022 and 2023?",
    "Has student attendance changed since 2023"
  ];

  return (
    <main className="flex flex-col items-center">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a5d40b3a563ff737f5957323d52d13136ac61dc25b01ac2d454c781fab7199c?apiKey=48e0882be7cc4391993150eb17882064&" alt="" className="mt-24 aspect-square fill-cyan-600 w-[92px] max-md:mt-10" />
      <h1 className="mt-6 font-medium text-black">How can I help you today?</h1>
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}
      {messages.length === 0 ?(  
      <SuggestedQuestionsList questions={suggestedQuestions} />):null}
      <QuestionInput handleInputChange={handleInputChange}  handleSubmit={handleSubmit}/>
    </main>
  );
};
