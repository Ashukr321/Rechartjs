import React from 'react'
import { CartesianGrid, Legend, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from 'recharts'

const Radialbarchart = () => {
  const data = [
    {
      "name": "18-24",
      "uv": 31.47,
      "pv": 2400,
      "fill": "#8884d8"
    },
    {
      "name": "25-29",
      "uv": 26.69,
      "pv": 4567,
      "fill": "#83a6ed"
    },
    {
      "name": "30-34",
      "uv": -15.69,
      "pv": 1398,
      "fill": "#8dd1e1"
    },
    {
      "name": "35-39",
      "uv": 8.22,
      "pv": 9800,
      "fill": "#82ca9d"
    },
    {
      "name": "40-49",
      "uv": -8.63,
      "pv": 3908,
      "fill": "#a4de6c"
    },
    {
      "name": "50+",
      "uv": -2.63,
      "pv": 4800,
      "fill": "#d0ed57"
    },
    {
      "name": "unknow",
      "uv": 6.67,
      "pv": 4800,
      "fill": "#ffc658"
    }
  ]
  return (
    <div className='p-4 bg-bg_chart-100 h-screen sm:p-10 flex flex-col justify-start'>
      <h1 className='text-center text-3xl font-bold tracking-wider mb-5'>RadialBarChart</h1>

      <div className='w-full sm:w-1/2 mx-auto bg-white'>
        <ResponsiveContainer width="100%" height={300}>
          <RadialBarChart 
           data={data}
           outerRadius="100%"
           innerRadius="10%"
           startAngle={180}
           endAngle={0}
          >
            <CartesianGrid ></CartesianGrid>
            <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
            <Legend iconSize={20}  />
            <Tooltip></Tooltip>
          </RadialBarChart> 
        </ResponsiveContainer> 
      </div>
    </div>
  )
}

export default Radialbarchart
