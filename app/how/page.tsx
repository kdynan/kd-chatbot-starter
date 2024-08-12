import React from 'react';
import {HowItWorksStep} from '../../components/HowItWorksStep';
import { Sidebar } from '@/components/Sidebar';




const steps = [
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e81cd2ea1c34a0df44496c557912cbe5e2a930f0367cd0bf2f3192e046e6d22?apiKey=48e0882be7cc4391993150eb17882064&",
    iconAlt: "Question mark icon",
    description: "Ask a question to search statewide data by school district, demographics, grade, and more.",
    bgColor: "bg-cyan-600"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/021a9a505589f5486f0655455b8be0e63781b62d8a287c9f2d9856c00832434b?apiKey=48e0882be7cc4391993150eb17882064&",
    iconAlt: "Graph icon",
    description: "E2C Chat Bot finds and displays the data with graphs, and tables from published data on our E2C Research and data Hub site.",
    bgColor: "bg-teal-300"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3fccdac88c79618747931cb0b37e176646a1e354229bb319c02a915528694ba?apiKey=48e0882be7cc4391993150eb17882064&",
    iconAlt: "Share icon",
    description: "Share what you find. You can share charts, graphs, and questions you ask. Let people know what you found.",
    bgColor: "bg-emerald-300"
  }
];

export default function HowItWorks() {
  return (
    <>
    <Sidebar previousQuestions={null}/>
      <main className="flex flex-col items-start self-center w-full max-w-[1129px] max-md:max-w-full">
        <section className="ml-3.5 max-md:max-w-full w-3/4">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-16 max-md:mt-10 max-md:max-w-full">
                <div className="flex justify-center items-center px-16 py-20 bg-black rounded-lg max-md:px-5 max-md:max-w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9149c31a77d0a05252c32b7bc2bd34c4503749eaaeec6049d0f39f38c70e82f4?apiKey=48e0882be7cc4391993150eb17882064&" alt="How It Works icon" className="mt-28 mb-20 aspect-square fill-white w-[52px] max-md:my-10" />
                </div>
                <h1 className="self-center mt-12 text-2xl font-semibold text-center text-black max-md:mt-10">
                  How it works
                </h1>
              </div>
            </div>
          </div>
        </section>
        {steps.map((step, index) => (
          <HowItWorksStep key={index} {...step} />
        ))}
      </main>
      </>
  );
};