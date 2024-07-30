'use client';

import React from 'react';
import {Chatbot} from '../components/Chatbot';

export default function MainContent() {
  return (
    <main className="flex flex-col items-center">
      <Chatbot />
    </main>
  );
};
