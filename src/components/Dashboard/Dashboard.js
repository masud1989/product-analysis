import React from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000
        }
    ];
    
    return (
        <div className='grid grid-cols-2 gap-10 mt-20'>

            <div className='ml-10'>
                <LineChart width={500} height={400} data={data}>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Line type="monotone" dataKey={'revenue'}  stroke="#8884d8"></Line>
                    <Line type="monotone" dataKey={'investment'}  stroke="#888fff"></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    {/* <YAxis dataKey={'sell'}></YAxis>    */}
                    <YAxis></YAxis>
                </LineChart>
                <h1 className='bg-green-400 text-3xl ms-10 text-white'>Line Chart</h1>
            </div>

            <div className='mr-10'>
                <BarChart width={500} height={400} data={data}>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar dataKey={'revenue'} fill="#8884d8"></Bar>
                    <Bar dataKey={'investment'} fill="#888fff"></Bar>
                    <XAxis dataKey={'month'}></XAxis>
                    {/* <YAxis dataKey={'sell'}></YAxis>    */}
                    <YAxis></YAxis>
                </BarChart>
                <h1 className='bg-green-400 text-3xl ms-10 text-white'>Bar Chart</h1>
            </div>
        </div>
    );
};

export default Dashboard;