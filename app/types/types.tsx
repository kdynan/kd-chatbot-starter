export interface Message {
    text: string;
    messageType: 'explanation' | 'sql' | 'chart' | 'error' | 'user' | 'chatbot' | 'loading' | 'queryResults';
    sender: 'user' | 'chatbot';
    tableData?: E2CTableData;
    chartData?: E2CChartData;
    chartType?: string;
}

export type E2CTableData = Array<Array<string>>;

export type E2CChartDataRow = [string, string | number, string | {}];

export type E2CChartData = Array<E2CChartDataRow>;