import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { SuggestedQuestionsList } from './SuggestedQuestionsList';
import { DataExplanation } from './DataExplanation';
import { RenderMessage } from './RenderMessage';
import { Message, E2CTableData, E2CChartDataRow, E2CChartData } from '../app/types/types';

type ChatbotProps = {
    setPreviousQuestions: React.Dispatch<React.SetStateAction<string[]>>;
}


export function Chatbot({setPreviousQuestions} : ChatbotProps) {
    const suggestedQuestions = [
        "Has student attendance bounced back after COVID?",
        "What was student attendance in 2023?",
        "Number of students applied college in the Boston in 2022 and 2023?",
        "Has student attendance changed since 2023"
    ];

    /*
    const query_results  = {
        "SY": {
          "0": "2023",
          "1": "2023",
          "2": "2023",
          "3": "2023",
          "4": "2023",
          "5": "2023",
          "6": "2023",
          "7": "2023",
          "8": "2023",
          "9": "2023",
          "10": "2023",
          "11": "2023",
          "12": "2023",
          "13": "2023",
          "14": "2023",
          "15": "2023",
          "16": "2023",
          "17": "2023",
          "18": "2023",
          "19": "2023",
          "20": "2023",
          "21": "2023",
          "22": "2023",
          "23": "2023",
          "24": "2023",
          "25": "2023",
          "26": "2023",
          "27": "2023",
          "28": "2023",
          "29": "2023",
          "30": "2023",
          "31": "2023",
          "32": "2023",
          "33": "2023",
          "34": "2023",
          "35": "2023",
          "36": "2023",
          "37": "2023",
          "38": "2023",
          "39": "2023",
          "40": "2023",
          "41": "2023",
          "42": "2023",
          "43": "2023",
          "44": "2023",
          "45": "2023",
          "46": "2023",
          "47": "2023",
          "48": "2023",
          "49": "2023"
        },
        "ORG_CODE": {
          "0": "00000000",
          "1": "00000000",
          "2": "00000000",
          "3": "00000000",
          "4": "00000000",
          "5": "00000000",
          "6": "00000000",
          "7": "00000000",
          "8": "00000000",
          "9": "00000000",
          "10": "00000000",
          "11": "00000000",
          "12": "00000000",
          "13": "00000000",
          "14": "00000000",
          "15": "00000000",
          "16": "00000000",
          "17": "00000000",
          "18": "00000000",
          "19": "00000000",
          "20": "00000000",
          "21": "00000000",
          "22": "00000000",
          "23": "00000000",
          "24": "00000000",
          "25": "00000000",
          "26": "00000000",
          "27": "00000000",
          "28": "00000000",
          "29": "00000000",
          "30": "00000000",
          "31": "00000000",
          "32": "00000000",
          "33": "00000000",
          "34": "00000000",
          "35": "00000000",
          "36": "00000000",
          "37": "00000000",
          "38": "00000000",
          "39": "00000000",
          "40": "00000000",
          "41": "00000000",
          "42": "00000000",
          "43": "00000000",
          "44": "00000000",
          "45": "00000000",
          "46": "00000000",
          "47": "00000000",
          "48": "00000000",
          "49": "00000000"
        },
        "ORG_NAME": {
          "0": "State Total",
          "1": "State Total",
          "2": "State Total",
          "3": "State Total",
          "4": "State Total",
          "5": "State Total",
          "6": "State Total",
          "7": "State Total",
          "8": "State Total",
          "9": "State Total",
          "10": "State Total",
          "11": "State Total",
          "12": "State Total",
          "13": "State Total",
          "14": "State Total",
          "15": "State Total",
          "16": "State Total",
          "17": "State Total",
          "18": "State Total",
          "19": "State Total",
          "20": "State Total",
          "21": "State Total",
          "22": "State Total",
          "23": "State Total",
          "24": "State Total",
          "25": "State Total",
          "26": "State Total",
          "27": "State Total",
          "28": "State Total",
          "29": "State Total",
          "30": "State Total",
          "31": "State Total",
          "32": "State Total",
          "33": "State Total",
          "34": "State Total",
          "35": "State Total",
          "36": "State Total",
          "37": "State Total",
          "38": "State Total",
          "39": "State Total",
          "40": "State Total",
          "41": "State Total",
          "42": "State Total",
          "43": "State Total",
          "44": "State Total",
          "45": "State Total",
          "46": "State Total",
          "47": "State Total",
          "48": "State Total",
          "49": "State Total"
        },
        "PRG_START": {
          "0": "2022",
          "1": "2022",
          "2": "2021",
          "3": "2021",
          "4": "2021",
          "5": "2021",
          "6": "2020",
          "7": "2020",
          "8": "2019",
          "9": "2019",
          "10": "2020",
          "11": "2020",
          "12": "2018",
          "13": "2018",
          "14": "2018",
          "15": "2022",
          "16": "2019",
          "17": "2019",
          "18": "2018",
          "19": "2017",
          "20": "2017",
          "21": "2018",
          "22": "2018",
          "23": "2021",
          "24": "2016",
          "25": "2020",
          "26": "2016",
          "27": "2020",
          "28": "2015",
          "29": "2017",
          "30": "2015",
          "31": "2019",
          "32": "2017",
          "33": "2019",
          "34": "2011",
          "35": "2013",
          "36": "2014",
          "37": "2012",
          "38": "2018",
          "39": "2016",
          "40": "2012",
          "41": "2019",
          "42": "2014",
          "43": "2011",
          "44": "2013",
          "45": "2018",
          "46": "2019",
          "47": "2018",
          "48": "2016",
          "49": "2015"
        },
        "PRG_END": {
          "0": "2022",
          "1": "2022",
          "2": "2022",
          "3": "2022",
          "4": "2021",
          "5": "2021",
          "6": "2022",
          "7": "2022",
          "8": "2022",
          "9": "2022",
          "10": "2021",
          "11": "2021",
          "12": "2018",
          "13": "2022",
          "14": "2022",
          "15": "2022",
          "16": "2021",
          "17": "2021",
          "18": "2019",
          "19": "2022",
          "20": "2022",
          "21": "2021",
          "22": "2021",
          "23": "2022",
          "24": "2022",
          "25": "2020",
          "26": "2022",
          "27": "2020",
          "28": "2022",
          "29": "2021",
          "30": "2022",
          "31": "2020",
          "32": "2021",
          "33": "2020",
          "34": "2022",
          "35": "2022",
          "36": "2022",
          "37": "2022",
          "38": "2022",
          "39": "2021",
          "40": "2022",
          "41": "2019",
          "42": "2022",
          "43": "2022",
          "44": "2022",
          "45": "2020",
          "46": "2019",
          "47": "2020",
          "48": "2021",
          "49": "2015"
        },
        "GRP_TYP": {
          "0": "Teachers",
          "1": "All Educators",
          "2": "Teachers",
          "3": "All Educators",
          "4": "Teachers",
          "5": "All Educators",
          "6": "Teachers",
          "7": "All Educators",
          "8": "Teachers",
          "9": "All Educators",
          "10": "Teachers",
          "11": "All Educators",
          "12": "Administrators",
          "13": "Teachers",
          "14": "All Educators",
          "15": "Administrators",
          "16": "Teachers",
          "17": "All Educators",
          "18": "Administrators",
          "19": "All Educators",
          "20": "Teachers",
          "21": "Teachers",
          "22": "All Educators",
          "23": "Administrators",
          "24": "Teachers",
          "25": "Teachers",
          "26": "All Educators",
          "27": "All Educators",
          "28": "Teachers",
          "29": "Teachers",
          "30": "All Educators",
          "31": "Teachers",
          "32": "All Educators",
          "33": "All Educators",
          "34": "Teachers",
          "35": "Teachers",
          "36": "Teachers",
          "37": "Teachers",
          "38": "Administrators",
          "39": "Teachers",
          "40": "All Educators",
          "41": "Teachers",
          "42": "All Educators",
          "43": "All Educators",
          "44": "All Educators",
          "45": "All Educators",
          "46": "All Educators",
          "47": "Teachers",
          "48": "All Educators",
          "49": "Administrators"
        },
        "NEED_IMPROV_OR_UNSAT_PCT": {
          "0": "8.40",
          "1": "8.20",
          "2": "7.50",
          "3": "7.30",
          "4": "6.70",
          "5": "6.60",
          "6": "6.30",
          "7": "6.20",
          "8": "5.60",
          "9": "5.50",
          "10": "5.40",
          "11": "5.30",
          "12": "5.30",
          "13": "5.10",
          "14": "5.00",
          "15": "4.70",
          "16": "4.70",
          "17": "4.60",
          "18": "4.50",
          "19": "4.50",
          "20": "4.50",
          "21": "4.30",
          "22": "4.20",
          "23": "4.20",
          "24": "4.10",
          "25": "4.10",
          "26": "4.00",
          "27": "3.90",
          "28": "3.80",
          "29": "3.80",
          "30": "3.80",
          "31": "3.70",
          "32": "3.70",
          "33": "3.60",
          "34": "3.60",
          "35": "3.60",
          "36": "3.60",
          "37": "3.60",
          "38": "3.60",
          "39": "3.50",
          "40": "3.50",
          "41": "3.50",
          "42": "3.50",
          "43": "3.50",
          "44": "3.50",
          "45": "3.50",
          "46": "3.50",
          "47": "3.50",
          "48": "3.40",
          "49": "3.40"
        }
      }
        */

     const query_results  = {
      "SY": {
        "0": "2023",
        "1": "2023",
        "2": "2023",
        "3": "2023",
        "4": "2023",
        "5": "2023",
        "6": "2023",
        "7": "2023",
        "8": "2023",
        "9": "2023"
      },
      "SCHOOL": {
        "0": "John D Hardy",
        "1": "Woodland",
        "2": "Jonas Clarke Middle",
        "3": "Wm Diamond Middle",
        "4": "Country",
        "5": "Hunnewell",
        "6": "Winn Brook",
        "7": "L D Batchelder",
        "8": "Albert S. Woodward Memorial School",
        "9": "Martin Luther King Jr."
      },
      "DISTRICT": {
        "0": "Wellesley",
        "1": "Weston",
        "2": "Lexington",
        "3": "Lexington",
        "4": "Weston",
        "5": "Wellesley",
        "6": "Belmont",
        "7": "North Reading",
        "8": "Southborough",
        "9": "Cambridge"
      },
      "AVG_MCAS_SCORE": {
        "0": "524.43666667",
        "1": "522.01500000",
        "2": "521.24666667",
        "3": "519.45666667",
        "4": "519.18000000",
        "5": "518.89000000",
        "6": "518.00500000",
        "7": "517.79000000",
        "8": "517.59000000",
        "9": "517.49666667"
      },
      "AVG_PCT_MEETING_OR_EXCEEDING": {
        "0": "88.66666700",
        "1": "85.50000000",
        "2": "82.00000000",
        "3": "81.00000000",
        "4": "80.00000000",
        "5": "83.33333300",
        "6": "83.50000000",
        "7": "81.66666700",
        "8": "82.50000000",
        "9": "80.33333300"
      }
    } 

    //const query_results = { ATTEND_RATE: '92.50', SY: '2023' }
    const [input, setInput] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const questionInputRef = useRef<HTMLInputElement | null>(null);

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

        await new Promise(resolve => setTimeout(resolve, 2000))
        const botHeader: Message = { text: 'E2C Chatbot', messageType:'chatbot', sender: 'chatbot' };
        setMessages((prevMessages) => [...prevMessages.slice(0, -1), botHeader]);
        const queryResults : Message = { text: '', messageType:'queryResults', sender: 'chatbot', tableData: transFormQueryResultsForTable(query_results) };
        setMessages((prevMessages) => [...prevMessages, queryResults]);
        const chartResults : Message = { text: '', messageType:'chart', sender: 'chatbot', chartData: transFormQueryResultsForChart(query_results, 'SCHOOL', 'AVG_MCAS_SCORE') };
        setMessages((prevMessages) => [...prevMessages, chartResults]);
        const botExplanation: Message = { text: 'This query retrieves the average student attendance rate for all students in Massachusetts for the 2023 school year. It uses the DS_STUDENT_ATTENDANCE_STUDENT_GROUPS view, which contains attendance data for various student groups across different school years.', messageType:'explanation', sender: 'chatbot' };
        setMessages((prevMessages) => [...prevMessages, botExplanation]);
        setInput('');
        questionInputRef.current!.value = '';
        setPreviousQuestions((prevQuestions) => [...prevQuestions, input]);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>        
            <div className="flex flex-col h-full">
                <div className="flex flex-col overflow-y-auto bg-white h-full">
                    <div className="flex flex-col mb-4 max-w-3xl">
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
                                ref={questionInputRef}
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