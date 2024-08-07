'use client';

import React from 'react';
import { Chatbot } from '../components/Chatbot';
import { Sidebar } from '@/components/Sidebar';
import { useState } from "react";

export default function MainContent() {
  const [previousQuestions, setPreviousQuestions] = useState<string[]>([]);
  return (
    <>
      <Sidebar previousQuestions={previousQuestions} />
      <div className="relative flex flex-col items-start h-full w-full">
        <Chatbot setPreviousQuestions={setPreviousQuestions} />
      </div>
    </>
  );
};
