export interface Message {
    text: string;
    messageType: 'explanation' | 'sql' | 'chart' | 'error' | 'user' | 'chatbot' | 'loading' | 'queryResults';
    sender: 'user' | 'chatbot';
    query_result?: Array<Array<string>>;
}