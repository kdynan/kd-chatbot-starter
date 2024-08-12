import { E2CChartData } from "@/app/types/types";
import { Chart } from "react-google-charts";
import { useState } from "react";

export const ChartComponent = ({ data }: { data : E2CChartData }, requestedType : string) => {
    //const [chartData, setChartData] = useState<E2CChartData>(data);
    
    const chartOptions = {
        //title: 'Company Performance',
        //hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    //    vAxis: { minValue: 0 },
        chartArea: { left : '50' },
        legend: { position: 'bottom', alignment: 'left' },
        colors: ['#0891b2']
    };
    
    return (
        <Chart
        width="100%"
        height="500px"
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={chartOptions}
//        rootProps={{ 'data-testid': '1' }}
        />
    )


}