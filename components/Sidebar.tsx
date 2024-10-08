import React from 'react';


export function Sidebar({ previousQuestions }: { previousQuestions: string[] | null}) {
  return (
    <aside className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full px-5">
      <div className="flex flex-col grow mt-1.5 max-md:mt-10">

        {previousQuestions && previousQuestions.length > 0 && (

          <h2 className="self-start text-sm font-bold text-black">
            Previous questions asked
          </h2>
        )}
        {previousQuestions && previousQuestions.map((question, index) => (
          <div key={index} className="px-2.5 py-5 mt-2 text-xs leading-6 text-white bg-cyan-600 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-cyan-800">
            {question}
          </div>
        ))}


      </div>
    </aside>
  );
}