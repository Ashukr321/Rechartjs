import React from "react";
import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "recharts";
import { data01, data02 } from "../../data/ScatterChartData";

const Scatterchart: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-start bg-bg_chart-100 p-4 sm:p-10">
      <h1 className="text-center font-bold text-3xl mb-5">ScatterChart</h1>
      <div className="w-full sm:w-1/2 rounded-sm p-4 bg-white mx-auto">
        <ResponsiveContainer width="100%" height={330}>
          <ScatterChart
          margin={{ top:15,right:20}}
          >
            <CartesianGrid strokeDasharray=" 3 3 " />
            <XAxis dataKey="x" type="number" name="stature" unit="cm" />
            <YAxis dataKey="y" type="number" name="weight" unit="kg" />
            <ZAxis
              dataKey="z" 
              type="number"
              range={[64, 144]}
              name="score"
              unit="km"
            />
            <Tooltip cursor={{strokeDasharray:'3,3'}}/>
            <Scatter name="A school" data={data01} fill="#8884d8" />
            <Scatter name="Ashutosh" data={data02} fill="#82ca9d"/>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Scatterchart;
