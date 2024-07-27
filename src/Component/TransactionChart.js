import { Legend } from "@headlessui/react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    Expense: 4000,
    Income: 2400,
  },
  {
    name: "Feb",
    Expense: 3000,
    Income: 1398,
  },
  {
    name: "Mar",
    Expense: 2000,
    Income: 9800,
  },
  {
    name: "Apr",
    Expense: 2780,
    Income: 3908,
  },
  {
    name: "May",
    Expense: 1890,
    Income: 4800,
  },
  {
    name: "Jun",
    Expense: 2390,
    Income: 3800,
  },
  {
    name: "July",
    Expense: 3490,
    Income: 4300,
  },
  {
    name: "Aug",
    Expense: 2000,
    Income: 9800,
  },
  {
    name: "Sep",
    Expense: 2780,
    Income: 3908,
  },
  {
    name: "Oct",
    Expense: 1890,
    Income: 4800,
  },
  {
    name: "Nov",
    Expense: 2390,
    Income: 3800,
  },
  {
    name: "Dec",
    Expense: 3490,
    Income: 4300,
  },
];

const TransactionChart = () => {
  return (
    <div className=" bg-white h-[250px] text-xs flex flex-col rounded-sm border border-gray-200 p-2 mt-2 flex-1  " >
        <strong className="text-gray-700 font-semibold ">Transactions</strong>
      <div className="w-full h-[200px] mt-5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="Expense"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="Income"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;
