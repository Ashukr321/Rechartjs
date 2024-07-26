import { Pie, PieChart, ResponsiveContainer, XAxis } from "recharts";
import { data01, data02 } from "../../data/data01";
const Paichart: React.FC = () => {
  return (
    <div className="bg-bg_chart-100 h-screen p-4 flex flex-col justify-start">
      <h1 className="text-center text-3xl tracking-wider  mb-5">PaiChart</h1>
      <div className="w-full sm:w-1/2 bg-white p-2 mx-auto">
        <ResponsiveContainer width="100%" height={340}>
          <PieChart margin={{ top: 10, right: 30, left: 0, bottom: 3 }}>
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              fill="#AF47D2"
              outerRadius={50}
              label
            ></Pie>

            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              fill="#FF8F00"
              innerRadius={100}
              label
            ></Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Paichart;
