import React from 'react';

interface HowItWorksStepProps {
  iconSrc: string;
  iconAlt: string;
  description: string;
  bgColor: string;
}

export const HowItWorksStep: React.FC<HowItWorksStepProps> = ({ iconSrc, iconAlt, description, bgColor }) => {
  return (
    <div className="mt-12 ml-16 max-w-full w-[655px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
          <div className={`flex flex-col items-center justify-center px-12 py-8 mx-auto ${bgColor} rounded-full h-[150px] w-[150px] max-md:px-5 max-md:mt-10`}>
            <img loading="lazy" src={iconSrc} alt={iconAlt} className="aspect-[1.04] fill-white w-[82px]" />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
          <p className="self-stretch my-auto text-xl text-black max-md:mt-10">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};