import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AreaChart1 = () => {
  const rangeData = [
    {
      day: "05-01",
      temperature: [-1, 10],
    },
    {
      day: "05-02",
      temperature: [2, 15],
    },
    {
      day: "05-03",
      temperature: [3, 12],
    },
    {
      day: "05-04",
      temperature: [4, 12],
    },
    {
      day: "05-05",
      temperature: [12, 16],
    },
    {
      day: "05-06",
      temperature: [5, 16],
    },
    {
      day: "05-07",
      temperature: [3, 12],
    },
    {
      day: "05-08",
      temperature: [0, 8],
    },
    {
      day: "05-09",
      temperature: [-3,5],
    },
  ];

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-center text-2xl mb-10 tracking-wider font-bold ">
        AreaCharts
      </h2>

      <div className="p-4 w-full sm:w-1/2 mx-auto bg-bg_chart-100">
        <ResponsiveContainer width="100%" height={280}   >
        <AreaChart
          data={rangeData}
          margin={{
            top: 10,
            right: 20,
            bottom: 0,
            left: 0,
          }}
        >
          <XAxis dataKey="day" />
          <YAxis />
          <Area type="monotone" dataKey="temperature" stroke="#8884d8" fill="orange" />
          <Tooltip />
        </AreaChart>
        </ResponsiveContainer>
        
      </div>
    </div>
  );
};

export default AreaChart1;