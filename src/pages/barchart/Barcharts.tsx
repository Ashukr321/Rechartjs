import React from "react";
import data from "../../data/data";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
interface Data {
  name: string;
  uv: number;
  pv: number;
}

const Barcharts: React.FC = () => {
  return (
    <div className="p-10 bg-slate-100">
      <h1 className="text-center text-3xl mb-5 font-bold tracking-wider ">
        Barcharts1
      </h1>

      <div className=" w-full  sm:w-1/2 mx-auto  p  bg-bg_chart-100">
        <div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={data}
              margin={{ right: 10, left: 4, top: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray={1,1}  ></CartesianGrid>
              <XAxis dataKey="name" />
              <YAxis />

              <Tooltip />
              <Bar dataKey="uv" fill="#C63C51" />
              <Bar dataKey="pv" fill="#FF8225" />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};



export default Barcharts;
