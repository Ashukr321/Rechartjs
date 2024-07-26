import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import data from "../../data/data";

const Linechart: React.FC = () => {
  return (
    <div className="bg-bg_chart-100 h-screen flex flex-col justify-start overscroll-y-auto p-4">
      <h1 className="text-center text-3xl font-bold tracking-wider mb-5 ">
        LineChart
      </h1>
      <div className="w-full sm:w-1/2 mx-auto bg-white p-2">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 4 }}
          >
            <CartesianGrid strokeDasharray={(2, 3)} />
            <XAxis dataKey="name" />

            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#03346E"
              fill="#EB3678"
            ></Line>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#03346E"
              fill="#EB3678"
            ></Line>
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Linechart;
