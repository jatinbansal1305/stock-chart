import React from 'react';
import { Area, XAxis, YAxis, ResponsiveContainer, AreaChart, Tooltip } from 'recharts';

const data = [
    { date: '2024-08-01', value: 4000 },
    { date: '2024-08-02', value: 3000 },
    { date: '2024-08-03', value: 2000 },
    { date: '2024-08-04', value: 2780 },
    { date: '2024-08-05', value: 1890 },
    { date: '2024-08-06', value: 2390 },
    { date: '2024-08-07', value: 3490 },
];

const LineChartComponent = () => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="rgb(74, 86, 226)" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="rgb(74, 86, 226)" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="rgb(74, 86, 226)"
                        fill="url(#chartColor)"
                    />
                    <XAxis dataKey="none" />
                    <YAxis />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartComponent;