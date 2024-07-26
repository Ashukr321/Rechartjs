import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface RangeData {
  day: string;
  temperature: number[];
}

const rangeData: RangeData[] = [
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
    temperature: [-3, 5],
  },
];

interface Data {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: Data[] = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AreaChart1: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-center text-2xl mb-10 tracking-wider font-bold">
        AreaCharts
      </h2>
      <div className="p-4 w-full sm:w-1/2 mx-auto bg-bg_chart-100">
        <ResponsiveContainer width="100%" height={280}>
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
            <Area
              type="linear"
              dataKey="temperature"
              stroke="#8884d8"
              fill="orange"
            />
            <Tooltip />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 w-full sm:w-1/2 mx-auto bg-bg_chart-100">
        <h1 className="text-center mb-3  text-2xl font-bold tracking-wider">
          AreaCharts2
        </h1>
        <hr className="mb-4" />
        <LineAreaChart />
      </div>
    </div>
  );
};

const LineAreaChart: React.FC = () => {
  return (
    <>
    <div className="w-full">
      <ResponsiveContainer width="100%" height={290} >
        <AreaChart
          data={data}
          margin={{ top: 10, left: 4, right: 4, bottom: 10 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray={3.3} />
          <Tooltip />

          <Area type="monotone" dataKey="uv" stroke="#FF7EE2" fillOpacity={1} fill="pink" />
          <Area type="monotone" dataKey="pv" stroke="#478CCF" fillOpacity={.4} fill="#DEF9C4" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </>
  );
};

export default AreaChart1;
