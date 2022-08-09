import React from "react";
import Gradient from "../assets/gradient.png";
import { AreaChart, Area, Tooltip } from "recharts";
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

const Dashboard = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 h-full p-6">
      <div className="col-span-2 ">
        <span className="font-bold h-fit">Hello Oluwatobi</span>{" "}
        <div className="py-5">
          <img src={Gradient} alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  items-center">
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
            <AreaChart
              width={218}
              height={150}
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
            <AreaChart
              width={218}
              height={150}
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
                fill="#FEEDDC"
              />
              <Tooltip />
            </AreaChart>
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
            <AreaChart
              width={218}
              height={150}
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
                fill="#FDE3E3"
              />
              <Tooltip />
            </AreaChart>
          </div>
        </div>
      </div>

      <div>
        <div className="flex  justify-between">
          <span>Appointments</span>
          <span>Book Appointment</span>
        </div>
        <div
          className="py-5 no-underline"
          style={{ textDecoration: "none !important" }}
        >
          <Calendar />
        </div>
      </div>
      <div className="col-span-3">
        <div class="overflow-x-auto relative">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
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
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
      </div>
    </div>
  );
};

export default Dashboard;
