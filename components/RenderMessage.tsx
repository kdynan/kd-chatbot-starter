import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Message } from '../app/types/message';

export function RenderMessage({ message }: { message: Message }) {

  switch (message.messageType) {

    case 'explanation': return (
      <section className="relative mt-7 text-base text-black max-md:max-w-full">
        <p>{message.text}</p>
      </section>
    );
    case 'loading' : return (
      <div className="flex flex-wrap gap-3 text-xl max-md:mt-10">
       <div className="flex flex-grow gap-3 px-4 py-4 my-auto text-neutral-700">
          <img
            loading="lazy"
            src="/images/chatbot.svg"
            alt=""
            className="object-contain shrink-0 bg-cyan-600 rounded aspect-[1.06] w-[34px]"
          />
          <div className="flex">{message.text}</div>
          <div className="flex-auto"><RotatingLines width='30' strokeColor="#0891b2"/></div>
        </div>
      </div>

    );
    case 'chatbot': return (
      <div className="flex flex-wrap gap-3 text-xl max-md:mt-10">
       <div className="flex flex-grow gap-3 px-4 py-4 my-auto text-neutral-700">
          <img
            loading="lazy"
            src="/images/chatbot.svg"
            alt=""
            className="object-contain shrink-0 bg-cyan-600 rounded aspect-[1.06] w-[34px]"
          />
          <div className="flex-auto">{message.text}</div>
        </div>
        <div className="flex flex-1 gap-2.5 my-auto justify-end">
          <img
            loading="lazy"
            src="/images/bar.svg"
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <img
            loading="lazy"
            src="/images/line.svg"
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <img
            loading="lazy"
            src="/images/like.svg"
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <img
            loading="lazy"
            src="/images/dislike.svg"
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <img
            loading="lazy"
            src="/images/feedback.svg"
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
        </div>
      </div>
    );

    case 'sql':
    case 'chart':
    case 'error':
    case 'user': return (
      <div className="flex flex-wrap gap-3 text-xl max-md:mt-10">
        <div className="flex flex-wrap flex-auto gap-3 px-4 py-4 my-auto rounded-lg bg-zinc-100 text-neutral-700">
          <img
            loading="lazy"
            src="/images/user.svg"
            alt=""
            className="object-contain shrink-0 rounded-none aspect-[1.06] w-[34px]"
          />
          <div className="flex-auto my-auto max-md:max-w-full">
            {message.text}
          </div>
        </div>
      </div>
    );
  }
};