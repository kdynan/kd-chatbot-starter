import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { SuggestedQuestionsList } from './SuggestedQuestionsList';
import { DataExplanation } from './DataExplanation';
import { RenderMessage } from './RenderMessage';
import { Message } from '../app/types/message';


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

    const handleSend =  async () => {
        if (input.trim() === '') return;

        const userMessage: Message = { text: input, sender: 'user', messageType:'user' };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        const loadingMessage: Message = { text: 'Determining the best response...', messageType:'loading', sender: 'chatbot' };
        setMessages((prevMessages) => [...prevMessages, loadingMessage]);
        // try {

        //     const response = await fetch('/api/chat', {t
        //         method: 'POST',
        //         body: JSON.stringify({ question: input }),
        //     });
        //     const json = await response.json();
        //     console.log(json);
        //     const botMessage: Message = { text: json.response.explanation, messageType:'explanation', sender: 'bot' };
        //     setMessages((prevMessages) => [...prevMessages, botMessage]);
        // } catch (error) {
        //     const errorMessage: Message = { text: 'Error: Unable to fetch response', messageType:'error', sender: 'bot' };
        //     setMessages((prevMessages) => [...prevMessages, errorMessage]);
        // }

        await new Promise(resolve => setTimeout(resolve, 5000))
        const botHeader: Message = { text: 'E2C Chatbot', messageType:'chatbot', sender: 'chatbot' };
        setMessages((prevMessages) => [...prevMessages.slice(0, -1), botHeader]);
        const botExplanation: Message = { text: 'This query retrieves the average student attendance rate for all students in Massachusetts for the 2023 school year. It uses the DS_STUDENT_ATTENDANCE_STUDENT_GROUPS view, which contains attendance data for various student groups across different school years.', messageType:'explanation', sender: 'chatbot' };
    setMessages((prevMessages) => [...prevMessages, botExplanation]);
        setInput('');
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>        
            <div className="flex flex-col h-full px-20">
                <div className="flex flex-col  bg-white h-full">
                    <div className="flex flex-col overflow-y-auto mb-4 max-w-3xl">
                        {messages.map((message, index) => (
                                <RenderMessage message={message} />
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    {messages.length === 0 ? (
                        <SuggestedQuestionsList questions={suggestedQuestions} />) : null}
                    
                </div>
                <div className="flex flex-col justify-center mb-7 max-w-3xl text-lg text-stone-300">
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
                                <img loading="lazy" src="/images/submit.svg" alt="" className="shrink-0 self-start aspect-[1.25] fill-cyan-600 w-[25px]" />
                            </button>
                        </div>
                    </div>

            </div>
        </>
    );
};