import React from "react";
import Gradient from "../../assets/gradient.png";
import GaugeChart from "react-gauge-chart";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  // PieChart,
  // Pie,
  // Cell,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import Calendar from "react-calendar";
import "./Calendar.css";
import Patient from "../../assets/patient.png";
import { ArrowUpIcon } from "@heroicons/react/outline";
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
// eslint-disable-next-line
const COLORS = ["#F00530", "#FEE6EB"];
// eslint-disable-next-line
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
    <div className="grid  grid-cols-1 lg:grid-cols-3  grid-flow-row gap-4 w-full  h-full p-6">
      {/* First Grid( Banner, 3 Cards and Pending Appointments) */}
      <div className=" md:col-span-2 space-y-4 overflow-y-scroll">
          <span className="font-[500] h-fit md:mb-4 text-xl md:text-2xl">
            Hello Oluwatobi
          </span>{" "}
        <div className="h-[250px] relative">
        <img src={Gradient} alt="" className=" object-cover w-full h-full " />
          <div className=" text-white absolute inset-0 w-full md:w-[90%] mx-auto h-full  px-4 py-4 md:py-6 items-center flex justify-center">
            <div className="flex flex-col  justify-between xl:py-2 w-[60%] sm:w-[70%]">
              <span className="pb-2 xl:pb-4 text-xl xl:text-2xl">
                Donate blood and earn STX
              </span>
              <div className="pb-4 xl:pb-8 max-w-sm">
              <span className="text-sm">
                Not all heros wear cape, help save a life and get paid in STX
                for every donation you make.
              </span>
              </div>
              <button className="rounded bg-white text-red-500 w-fit px-8 py-2">
                Learn More
              </button>
            </div>
            <div className="-py-10 w-[40%] sm:w-[30%] ">
              <img src={Patient} alt="" className="h-36 xl:h-44 mr-auto" />
            </div>
          </div>
        </div>
        <div className="py-2 lg:hidden h-auto w-full">
          <Calendar />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-2 gap-2 items-start md:col-span-2">
          <div className="flex flex-col justify-between bg-white rounded ">
            <div className="flex justify-between px-2 pt-4 pb-6 ">
              <div className="flex flex-col justify-between">
                <span>Total donations</span>
                <span className="text-[12px]">Last Month</span>
              </div>
              <div className="flex items-center  justify-between text-[#61A0FF] ">
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
                  stroke="#61A0FF"
                  fill="#CCE0FF"
                />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col justify-between bg-white rounded ">
            <div className="flex justify-between px-2 pt-4 pb-6">
              <div className="flex flex-col justify-between">
                <span>Total donations</span>
                <span className="text-[12px]">Last Month</span>
              </div>
              <div className="flex items-center justify-between text-[#FB9637] ">
                <span className="text-3xl  ">{data.length}</span>
                <ArrowUpIcon className=" h-7 w-6 rotate-45 pt-2 text-sm" />
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
                  stroke="#FB9637"
                  fill="#FEEDDC"
                />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col justify-between bg-white rounded ">
            <div className="flex justify-between px-2 pt-4 pb-6">
              <div className="flex flex-col justify-between">
                <span>Total donations</span>
                <span className="text-[12px]">Last Month</span>
              </div>
              <div className="flex items-center justify-between text-[#F00530] ">
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
                  stroke="#F00530"
                  fill="#FDE3E3"
                />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded mt-4">
          <div className="pl-4 pt-2">
            <span className="text-2xl">Pending Appointments</span>
          </div>

          <div className="overflow-x-auto relative md:col-span-2 py-5 md:row-span-2 bg-white rounded md:items-start">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs  text-gray-700 uppercase  ">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 sticky left-0 z-10  bg-white"
                  >
                    Center Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Date
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Time
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Donor id
                  </th>
                  <th scope="col" className="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white sticky left-0 z-10 bg-white"
                  >
                    Abuja Blood Donation Center
                  </th>
                  <td className="py-4 px-6">12/04/2022</td>
                  <td className="py-4 px-6">1:30-2:30pm</td>
                  <td className="py-4 px-6 text-green-400">Accepted</td>
                  <td className="py-4 px-6">aa234-678</td>
                  <td className="py-4 px-6 text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white sticky left-0 z-10 bg-white"
                  >
                    Abuja Blood Donation Center
                  </th>
                  <td className="py-4 px-6">12/04/2022</td>
                  <td className="py-4 px-6">1:30-2:30pm</td>
                  <td className="py-4 px-6 text-red-500">Declined</td>
                  <td className="py-4 px-6">aa234-678</td>
                  <td className="py-4 px-6 text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  dark:text-white sticky left-0 z-10 bg-white"
                  >
                    Abuja Blood Donation Center
                  </th>
                  <td className="py-4 px-6">12/04/2022</td>
                  <td className="py-4 px-6">1:30-2:30pm</td>
                  <td className="py-4 px-6 text-green-500">Accepted</td>
                  <td className="py-4 px-6">aa234-678</td>
                  <td className="py-4 px-6 text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="">
        <div className=" hidden md:flex items-center justify-between">
          <span>Appointments</span>
          <span>
            <button className="outline outline-offset-6 px-6 py-2 rounded outline-red-500 text-red-500 hidden xl:block">
              Book new appointment
            </button>{" "}
          </span>
        </div>
        <div className="py-2 hidden lg:block row-span-2 h-auto w-full">
          <Calendar />
        </div>

        <div className="bg-white rounded hidden flex-col justify-between md:flex h-min w-full p-5 ">
          <div className="pb-4">
            <span className="items-start text-xl">Performance Stats</span>
          </div>{" "}
          <div className=" flex flex-col justify-center  text-gray-700 px-4 py-2">
            <GaugeChart
              id="gauge-chart2"
              nrOfLevels={2}
              percent={0.26}
              colors={["red", "#FEE6EB"]}
              arcPadding={0}
              needleBaseColor="red"
              needleColor="gray"
              arcsLength={[0.26, 0.74]}
              textColor="gray"
            />
            <div className="flex justify-around items-center -mt-4 ">
              <span className="xl:pl-4">0%</span>
              <span className="pl-20 xl:pl-28">100%</span>
            </div>
            <div className="flex justify-around items-center mt-4 ">
              <span className="">Completed</span>
              <span className="pl-20">In Progress</span>
            </div>
            <div className="flex justify-around items-center mt-2 ">
              <span className="">0%</span>
              <span className="pl-20">100%</span>
            </div>
          </div>
          <div className="pb-6">
            <span className="items-start text-xl">Your Performance</span>
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
          {/* Performance Stats and Your Performance */}
      <div className="bg-white rounded flex flex-col justify-between md:hidden h-full p-5 ">
        <div className="pb-4">
          <span className="items-start text-xl">Performance Stats</span>
        </div>{" "}
        <div className=" flex flex-col justify-center text-gray-700 px-4 py-4">
          <GaugeChart
            id="gauge-chart2"
            nrOfLevels={2}
            percent={0.26}
            colors={["red", "#FEE6EB"]}
            arcPadding={0}
            needleBaseColor="red"
            needleColor="gray"
            arcsLength={[0.26, 0.74]}
            textColor="gray"
          />
          <div className="flex justify-around items-center -mt-4 ">
            <span className="">0%</span>
            <span className="pl-20">100%</span>
          </div>
          <div className="flex justify-around items-center mt-4 ">
            <span className="">Completed</span>
            <span className="pl-20">In Progress</span>
          </div>
          <div className="flex justify-around items-center mt-2 ">
            <span className="">0%</span>
            <span className="pl-20">100%</span>
          </div>
        </div>
        <div className="py-6">
          <span className="items-start text-xl">Your Performance</span>
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
