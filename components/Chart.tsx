import { E2CChartData } from "@/app/types/types";
import { Chart } from "react-google-charts";
import { useState } from "react";

export const ChartComponent = ({ data }: { data : E2CChartData }, requestedType : string) => {
    //const [chartData, setChartData] = useState<E2CChartData>(data);
    
    const chartOptions = {
        title: 'Company Performance',
        //hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        chartArea: { left : '0' },
        legend: { position: 'top', alignment: 'center' },
        colors: ['#89c4f4', '#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477', '#66aa00', '#b82e2e', '#316395', '#994499', '#22aa99', '#aaaa11', '#6633cc', '#e67300', '#8b0707', '#651067', '#329262', '#5574a6', '#3b3eac', '#b77322', '#16d620', '#b91383', '#f4359e', '#9c5935', '#a9c413', '#2a778d', '#668d1c', '#bea413', '#0c5922', '#743411']
    };
    
    return (
        <Chart
        width={'1000px'}
        height={'500px'}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={chartOptions}
//        rootProps={{ 'data-testid': '1' }}
        />
    )


}