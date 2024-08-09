import React, { useState, useRef, useEffect, KeyboardEvent, Suspense } from 'react';
import { SuggestedQuestionsList } from './SuggestedQuestionsList';
import { DataExplanation } from './DataExplanation';
import { RenderMessage } from './RenderMessage';
import { Message, E2CTableData, E2CChartDataRow, E2CChartData } from '../app/types/types';

type ChatbotProps = {
    setPreviousQuestions: React.Dispatch<React.SetStateAction<string[]>>;
}


export function Chatbot({setPreviousQuestions} : ChatbotProps) {

    const [messages, setMessages] = useState<Message[]>([]);
    const [sessionId, setSessionId] = useState<string>('');
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const questionInputRef = useRef<HTMLInputElement | null>(null);
    const submitQuestionButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    
    /**
     * 
     * @param query_results 
     * @returns 
     */
    const transFormQueryResultsForTable = (query_results: any) => {
    
        const transformedResults : E2CTableData= [];
        const headers = Object.keys(query_results);
        const colData : any = Object.values(query_results);
  
        const colCount = headers.length;
        const col1 : any = colData[0];
        const rowCount = Object.keys(col1).length
        
        console.log('colcount ' + colCount);
        console.log('rowcount ' + rowCount);
        
        transformedResults.push(headers);
        
        for (let i = 0; i < rowCount; i++) {
            const row = [];
            
            for (let j = 0; j < colCount; j++) {
                const col : any = colData[j];
                console.log('col ' + col[i]); 
                row.push(col[i]);
             }
            transformedResults.push(row);
        }

        return transformedResults;
    }

    /**
     * 
     * @param query_results 
     * @param x 
     * @param y 
     * @returns 
     */
    const transFormQueryResultsForChart = (query_results: any, x : string, y : string) => {
    
      const transformedResults : E2CChartData= [];
      const xvalsData = query_results[x];
      const yvalsData = query_results[y];

      const xvals = Object.values(xvalsData);
      const yvals = Object.values(yvalsData);
      
      const chartHeader : E2CChartDataRow =  [ x,  y,  {role : "style"}];  
      transformedResults.push(chartHeader);

      for (let i = 0; i < xvals.length; i++) {

          const xvalue = xvals[i] as string;
          const yvalue = Number(yvals[i] as string);
          const style =   "#0891b2"
          
          const row : E2CChartDataRow = [ xvalue, yvalue, style ];
          
          transformedResults.push(row);
      }

      return transformedResults;
  }

    const handleSend =  async () => {

        if (!questionInputRef.current!.value) return;

        const userMessage: Message = { text: questionInputRef.current!.value, sender: 'user', messageType:'user' };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        const loadingMessage: Message = { text: 'Determining the best response...', messageType:'loading', sender: 'chatbot' };
        setMessages((prevMessages) => [...prevMessages, loadingMessage]);
        
        let payload;

        if (!sessionId) {
            payload = {
                question: questionInputRef.current!.value,
            };
        } else {
            payload = {
                question: questionInputRef.current!.value,
                session_id: sessionId,
            };
        }
        
        try {

            const response = await fetch('/api/chat', {
                method: 'POST',
                body: JSON.stringify(payload),
            });
            const json = await response.json();
            console.log(json);

            if (json.response.rephrase_request) {
                const rephrase: Message = { text: json.response.rephrase_request, messageType:'rephrase', sender: 'chatbot' };
                setMessages((prevMessages) => [...prevMessages.slice(0, -1), rephrase]);
            } else {
            
                const botHeader: Message = { text: 'E2C Chatbot', messageType:'chatbot', sender: 'chatbot' };
                setMessages((prevMessages) => [...prevMessages.slice(0, -1), botHeader]);
                const queryResults : Message = { text: '', messageType:'queryResults', sender: 'chatbot', tableData: transFormQueryResultsForTable(JSON.parse(json.response.query_results)) };
                setMessages((prevMessages) => [...prevMessages, queryResults]);
                const chartResults : Message = { text: '', messageType:'chart', sender: 'chatbot', chartData: transFormQueryResultsForChart(JSON.parse(json.response.query_results), json.response.x, json.response.y) };
                setMessages((prevMessages) => [...prevMessages, chartResults]);

                const explanation: Message = { text: json.response.explanation, messageType:'explanation', sender: 'chatbot' };
                setMessages((prevMessages) => [...prevMessages, explanation]);

                const sql: Message = { text: json.response.sql, messageType:'sql', sender: 'chatbot' };
                setMessages((prevMessages) => [...prevMessages, sql]);

                const done: Message = { text: 'Question Answered...', messageType:'done', sender: 'chatbot' };
            setMessages((prevMessages) => [...prevMessages, done]);
            }

            if (!sessionId) {
                setSessionId(json.response.session_id);
            }

            
        } catch (error) {
            console.log(error);
            const errorMessage: Message = { text: 'Error: Unable to fetch response', messageType:'error', sender: 'chatbot' };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }

        setPreviousQuestions((prevQuestions) => [...prevQuestions, questionInputRef.current!.value]);
        questionInputRef.current!.value = '';
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>        
            <div className="flex flex-col h-full w-full">
                <div className="flex flex-col overflow-y-auto bg-white h-full max-w-screen-xl">
                    <div className="flex flex-col mb-4 gap-2 ">
                        {messages.map((message, index) => (
                                <RenderMessage message={message} />
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    {messages.length === 0 && (
                        <SuggestedQuestionsList inputRef={questionInputRef} submitRef={submitQuestionButtonRef}/>
                    )}
                    
                </div>
                <div className="flex flex-col justify-center mb-7 text-lg text-stone-300">
                        <div className="flex gap-5 px-6 py-5 rounded-lg border-2 border-cyan-600 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                            <label htmlFor="questionInput" className="sr-only">Ask a question</label>
                            <input
                                type="text"
                                id="questionInput"
                                placeholder="Ask a question"
                                className="flex-auto bg-transparent border-none outline-none"
                               // onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                ref={questionInputRef}
                            />
                            <button ref={submitQuestionButtonRef} id="submitQuestionButton" type="submit" aria-label="Submit question" onClick={handleSend}>
                                <img loading="lazy" src="/images/submit.svg" alt="" className="shrink-0 self-start aspect-[1.25] fill-cyan-600 w-[25px]" />
                            </button>
                        </div>
                    </div>

            </div>
        </>
    );
};