import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="flex gap-5 items-center self-stretch px-9 py-5 mt-20 text-lg text-white bg-cyan-600 max-md:flex-wrap max-md:px-5 max-md:mt-10">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9cec9df2d7042c751ec1ad1c6ed3bdf8f9127f12f353b8fbfc76e36e63b3e81?apiKey=48e0882be7cc4391993150eb17882064&" alt="" className="shrink-0 self-stretch max-w-full aspect-[2.94] w-[131px]" />
      <nav className="flex flex-auto justify-between self-stretch my-auto max-md:max-w-full">
        <a href="#" className="self-stretch my-auto">Terms of Service</a>
        <a href="#" className="self-stretch my-auto">FAQ</a>
        <a href="#" className="self-stretch my-auto">Contact us</a>
      </nav>
    </footer>
  );
};