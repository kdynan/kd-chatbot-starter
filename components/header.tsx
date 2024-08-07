import React from 'react';

interface HeaderProps {
  onAskQuestion: () => void;
}

export function Header() {
  return (
    <header className="flex gap-5 justify-between self-stretch px-11 py-4 w-full text-lg bg-zinc-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between font-medium text-zinc-900 max-md:flex-wrap max-md:max-w-full">
        <img loading="lazy" src="/images/e2c.svg" alt="" className="shrink-0 aspect-[0.71] w-[47px]" />
        <nav className="flex gap-10 my-auto max-md:flex-wrap px-20">
          <a href="/" className="text-zinc-900 font">Home</a>
          <a href="#" className="text-stone-900">Explore</a>
          <a href="#">Public Data</a>
          <a href="/how" className="flex-auto">How It Works</a>
          <a href="/about">About</a>
        </nav>
      </div>
      <button className="justify-center px-8 py-4 my-auto text-white text-sm bg-cyan-600 rounded-lg max-md:px-5">
        Ask a Question
      </button>
    </header>
  );
};