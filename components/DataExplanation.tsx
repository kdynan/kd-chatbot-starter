import React from 'react';

interface DataExplantionProps {
    explanation: string;
}

export function DataExplanation({explanation}: DataExplantionProps) {
  return (
    <section className="relative mt-7 text-base text-black max-md:max-w-full">
     <p>{explanation}</p>
    </section>
  );
};