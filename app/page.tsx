'use client';

import React from 'react';
import {Chatbot} from '../components/Chatbot';

export default function MainContent() {
  return (
    <div className="relative flex flex-col items-center h-full">
      <Chatbot/>
    </div>
  );
};
