import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Message } from '../app/types/types';
import { DataTable } from './DataTable';
import { ChartComponent } from './Chart';
import {SQL} from './SQL';

export function RenderMessage({ message }: { message: Message }) {

  switch (message.messageType) {

    case 'explanation': return (
      <section className="relative mt-7 text-sm text-black max-md:max-w-full">
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
      <div className="flex flex-wrap gap-3 text-sm max-md:mt-10">
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

    case 'sql': return (
      <section className=" text-sm text-black max-md:max-w-full bg-zinc-100">
        <SQL sql={message.text} />
      </section>
    )
    case 'chart': return (
     
        <div className="flex items-start">
        <ChartComponent data={message.chartData!} />
      </div>
    )
    case 'queryResults': return (
      <div className="flex px-20">
        <DataTable data={message.tableData!} />
      </div>
    )
    case 'error': return (
      <div className="flex flex-wrap gap-3 text-sm max-md:mt-10">
        <div className="flex flex-wrap flex-auto gap-3 px-4 py-4 my-auto rounded-lg bg-red-200 text-neutral-700">
        <img
            loading="lazy"
            src="/images/chatbot.svg"
            alt=""
            className="object-contain shrink-0 bg-cyan-600 rounded aspect-[1.06] w-[34px]"
          />
          <div className="flex-auto my-auto max-md:max-w-full">
            {message.text}
          </div>
        </div>
      </div>
    )
    case 'rephrase': return (
      <div className="flex flex-wrap gap-3 text-sm max-md:mt-10">
        <div className="flex gap-2 px-4 py-4 my-auto rounded-lg bg-zinc-100 text-neutral-700">
        <img
            loading="lazy"
            src="/images/chatbot.svg"
            alt=""
            className="object-contain shrink-0 bg-cyan-600 rounded aspect-[1.06] w-[34px]"
          />
          <div className="flex-auto my-auto max-md:max-w-full">
            {message.text}
          </div>
        </div>
      </div>
    )
    case 'user': return (
      <div className="flex flex-wrap gap-3 text-sm max-md:mt-10">
        <div className="flex gap-2 px-4 py-4 my-auto rounded-lg bg-zinc-100 text-neutral-700">
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
    )
    case 'done': return (
      <div className="flex flex-wrap gap-2.5 px-5 py-2.5 mt-4 max-w-full text-sm rounded-lg bg-stone-100 text-zinc-900">
        <img
          loading="lazy"
          src="/images/check.svg"
          alt=""
          className="object-contain shrink-0 my-auto aspect-[1.28] w-[23px]"
        />
        <div className="flex-auto max-md:max-w-full">{message.text}</div>
      </div>
    );
  }
};