import React from 'react';


export function Sidebar({ previousQuestions }: { previousQuestions: string[] }) {
  return (
    <aside className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full px-5">
      <div className="flex flex-col grow mt-1.5 max-md:mt-10">

        {previousQuestions.length > 0 && (

          <h2 className="self-start text-sm font-bold text-black">
            Previous questions asked
          </h2>
        )}
        {previousQuestions.map((question, index) => (
          <div className="px-2.5 py-5 mt-2 text-sm leading-6 text-white bg-cyan-600 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            {question}
          </div>
        ))}


      </div>
    </aside>
  );
}