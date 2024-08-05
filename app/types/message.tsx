export interface Message {
    text: string;
    messageType: 'explanation' | 'sql' | 'chart' | 'error' | 'user' | 'chatbot' | 'loading';
    sender: 'user' | 'chatbot';
}