import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { SuggestedQuestionsList } from './SuggestedQuestionsList';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

export const Chatbot: React.FC = () => {
    const suggestedQuestions = [
        "Has student attendance bounced back after COVID?",
        "What was student attendance in 2023?",
        "Number of students applied college in the Boston in 2022 and 2023?",
        "Has student attendance changed since 2023"
    ];
    const [input, setInput] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage: Message = { text: input, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        try {

            const response = await fetch('/api/chat', {
                method: 'POST',
                body: JSON.stringify({ question: input }),
            });
            const json = await response.json();
            console.log(json);
            const botMessage: Message = { text: json.response.explanation, sender: 'bot' };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            const errorMessage: Message = { text: 'Error: Unable to fetch response', sender: 'bot' };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }

        setInput('');
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a5d40b3a563ff737f5957323d52d13136ac61dc25b01ac2d454c781fab7199c?apiKey=48e0882be7cc4391993150eb17882064&" alt="" className="mt-24 aspect-square fill-cyan-600 w-[92px] max-md:mt-10" />
            <h1 className="mt-6 font-medium text-black">How can I help you today?</h1>
            <div className="flex flex-col items-center justify-center bg-gray-100">
                <div className="flex flex-col w-full bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col h-80 overflow-y-auto mb-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`p-2 my-1 rounded-md ${message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'
                                    }`}
                            >
                                {message.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    {messages.length === 0 ? (
                        <SuggestedQuestionsList questions={suggestedQuestions} />) : null}
                    <div className="flex flex-col justify-center mt-7 max-w-full text-lg text-stone-300 w-[778px]">
                        <div className="flex gap-5 px-6 py-5 rounded-lg border-2 border-cyan-600 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                            <label htmlFor="questionInput" className="sr-only">Ask a question</label>
                            <input
                                type="text"
                                id="questionInput"
                                placeholder="Ask a question"
                                className="flex-auto bg-transparent border-none outline-none"
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <button type="submit" aria-label="Submit question" onClick={handleSend}>
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b132fc3fea614364bd6f3a957fec28e477bd9774e7655738c3021ccf0c5b187?apiKey=48e0882be7cc4391993150eb17882064&" alt="" className="shrink-0 self-start aspect-[1.25] fill-cyan-600 w-[25px]" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};