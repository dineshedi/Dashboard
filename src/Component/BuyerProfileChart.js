import React from "react";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";

const data = [
  {
    name: "Male",
    value: 540,
  },
  {
    name: "Female",
    value: 620,
  },
  {
    name: "Others",
    value: 210,
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const BuyerProfileChart = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <div className=" bg-white h-[250px] text-xs flex flex-col rounded-sm border border-gray-200 p-2 mt-2 w-[19rem]">
      <strong className="text-gray-700 font-semibold ">Buyer Profile</strong>
      <div className="w-full h-[180px] mt-5">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="flex gap-3">
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-sky-600 z-10"></div>Male
            </div>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-green-300 z-10"></div>Female
            </div>
            <div className="flex gap-1">
              <div className="w-4 h-4 bg-yellow-400 z-10"></div>Others
            </div>
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BuyerProfileChart;
