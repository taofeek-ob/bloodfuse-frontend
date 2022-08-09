import React from "react";
import Gradient from "../assets/gradient.png";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import Calendar from "react-calendar";
import "./Calendar.css";
import { ArrowRightIcon, ArrowUpIcon } from "@heroicons/react/outline";
const data = [
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

const COLORS = ["#F00530", "#FEE6EB"];

const pieData = [
  { name: "Group A", value: 20 },
  { name: "Group B", value: 80 },
];

const PerformanceData = [
  {
    name: "Jan",
    pv: 58,
  },
  {
    name: "Feb",
    pv: 98,
  },
  {
    name: "Mar",
    pv: 38,
  },
  {
    name: "Apr",

    pv: 68,
  },
  {
    name: "May",

    pv: 48,
  },
  {
    name: "Jun",
  },
  {
    name: "Jul",
  },
  {
    name: "Aug",
  },
];
const Dashboard = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 w-full h-full p-6">
      <div className=" md:col-span-2 ">
        <span className="font-bold h-fit">Hello Oluwatobi</span>{" "}
      </div>

      <div className=" hidden md:flex justify-between">
        <span>Appointments</span>
        <span>Book Appointment</span>
      </div>

      <div className="py-2 h-full md:col-span-2">
        <img src={Gradient} alt="" className="h-full" />
      </div>
      <div className="py-2  w-full">
        <Calendar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 3 gap-4 items-start md:col-span-2 ">
        <div className="flex flex-col justify-between bg-white rounded ">
          <div className="flex justify-between px-2 pb-6 ">
            <div className="flex flex-col justify-between">
              <span>Total donations</span>
              <span className="text-[12px]">Last Month</span>
            </div>
            <div className="flex items-center  justify-between text-blue-600 ">
              <span className="text-3xl  ">{data.length}</span>
              <ArrowUpIcon className=" h-7 w-6 rotate-45 pt-2 text-sm " />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart
              // width={225}
              // height={150}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#CCE0FF"
              />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col justify-between bg-white rounded ">
          <div className="flex justify-between px-2 pb-6">
            <div className="flex flex-col justify-between">
              <span>Total donations</span>
              <span className="text-[12px]">Last Month</span>
            </div>
            <div className="flex items-center justify-between text-blue-600 ">
              <span className="text-3xl  ">{data.length}</span>
              <ArrowUpIcon className=" h-7 w-6 rotate-45 pt-2 text-sm " />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart
              // width={225}
              // height={150}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#CCE0FF"
              />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col justify-between bg-white rounded ">
          <div className="flex justify-between px-2 pb-6">
            <div className="flex flex-col justify-between">
              <span>Total donations</span>
              <span className="text-[12px]">Last Month</span>
            </div>
            <div className="flex items-center justify-between text-blue-600 ">
              <span className="text-3xl  ">{data.length}</span>
              <ArrowUpIcon className=" h-7 w-6 rotate-45 pt-2 text-sm " />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart
              // width={225}
              // height={150}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#CCE0FF"
              />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded hidden flex-col justify-between md:flex h-full p-5 ">
        <div>
          <span className="items-start text-2xl">Performance Stats</span>
        </div>{" "}
        <div className=" flex justify-center">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={pieData}
              cx={200}
              cy={200}
              outerRadius={80}
              innerRadius={50}
              fill="#F00530"
              strokeWidth="0"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={PerformanceData}>
              <XAxis dataKey="name" />
              <CartesianGrid strokeDasharray="4 4" vertical={false} />
              <YAxis axisLine={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#F00530"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div class="overflow-x-auto relative md:col-span-2 md:items-start">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6 sticky left-0 z-10  bg-gray-50">
                Product name
              </th>
              <th scope="col" class="py-3 px-6">
                Color
              </th>
              <th scope="col" class="py-3 px-6">
                Category
              </th>
              <th scope="col" class="py-3 px-6">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white sticky left-0 z-10 bg-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td class="py-4 px-6">Sliver</td>
              <td class="py-4 px-6">Laptop</td>
              <td class="py-4 px-6">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white sticky left-0 z-10 bg-white"
              >
                Microsoft Surface Pro
              </th>
              <td class="py-4 px-6">White</td>
              <td class="py-4 px-6">Laptop PC</td>
              <td class="py-4 px-6">$1999</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  dark:text-white sticky left-0 z-10 bg-white"
              >
                Magic Mouse 2
              </th>
              <td class="py-4 px-6">Black</td>
              <td class="py-4 px-6">Accessories</td>
              <td class="py-4 px-6">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-white rounded flex flex-col justify-between md:hidden h-full p-5 ">
        <div>
          <span className="items-start text-2xl">Performance Stats</span>
        </div>{" "}
        <div className=" flex justify-center">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={pieData}
              cx={200}
              cy={200}
              outerRadius={80}
              innerRadius={50}
              fill="#F00530"
              strokeWidth="0"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={PerformanceData}>
              <XAxis dataKey="name" />
              <CartesianGrid strokeDasharray="4 4" vertical={false} />
              <YAxis axisLine={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#F00530"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
