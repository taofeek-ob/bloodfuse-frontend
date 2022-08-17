import React, { useRef, Fragment } from "react";
import { FiCopy } from "react-icons/fi";
import { BsClipboardPlus } from "react-icons/bs";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/solid";
import { Popover, Transition } from "@headlessui/react";

import { Dollar, Vault } from "../../assets/images";

const historyData = [
  {
    id: "AXNB12345",
    transactionType: "Payment",
    date: "12.04.2022",
    amount: "122STX (100,000NGN)",
    receiverAddress: "Q0GP2DPPE4H9N0...",
    paymentType: "STX Transfer",
    status: "Completed",
  },
  {
    id: "AXNB12345",
    transactionType: "Payment",
    date: "12.04.2022",
    amount: "122STX (100,000NGN)",
    receiverAddress: "Q0GP2DPPE4H9N0...",
    paymentType: "STX Transfer",
    status: "Completed",
  },
  {
    id: "AXNB12345",
    transactionType: "Payment",
    date: "12.04.2022",
    amount: "122STX (100,000NGN)",
    receiverAddress: "Q0GP2DPPE4H9N0...",
    paymentType: "STX Transfer",
    status: "Cancelled",
  },
  {
    id: "AXNB12345",
    transactionType: "Payment",
    date: "12.04.2022",
    amount: "122STX (100,000NGN)",
    receiverAddress: "Q0GP2DPPE4H9N0...",
    paymentType: "STX Transfer",
    status: "Pending",
  },
  {
    id: "AXNB12345",
    transactionType: "Payment",
    date: "12.04.2022",
    amount: "122STX (100,000NGN)",
    receiverAddress: "Q0GP2DPPE4H9N0...",
    paymentType: "STX Transfer",
    status: "Cancelled",
  },
  {
    id: "AXNB12345",
    transactionType: "Payment",
    date: "12.04.2022",
    amount: "122STX (100,000NGN)",
    receiverAddress: "Q0GP2DPPE4H9N0...",
    paymentType: "STX Transfer",
    status: "Completed",
  },
  {
    id: "AXNB12345",
    transactionType: "Payment",
    date: "12.04.2022",
    amount: "122STX (100,000NGN)",
    receiverAddress: "Q0GP2DPPE4H9N0...",
    paymentType: "STX Transfer",
    status: "Pending",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Wallet = () => {
  const radio = useRef([]);

  return (
    <div className="w-full  h-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-x-2 sm:gap-x-8 gap-y-4 w-full md:max-w-7xl mt-4 mb-8">
        <div className="sm:col-span-2">
          <span className="font-[500] hidden md:inline h-fit text-xl md:text-2xl whitespace-nowrap">
            My Wallet
          </span>
          <span className="font-[500] inline md:hidden h-fit md:mb-4 text-xl md:text-2xl whitespace-nowrap">
            Dashboard {">>"} STX Wallet
          </span>
        </div>
        <div className="bg-[#FCFCFC] shadow-sm flex flex-col py-2 px-4  gap-2 justify-between">
          <div className="flex justify-between  py-4 ">
            <span>Total Balance</span>
            <button className="block sm:hidden text-[14px] bg-[#FFF5F7] px-4 ml-auto rounded-full text-[#F00530] border border-transparent focus:border-[#F00530]">
              Connect STX Account
            </button>
          </div>
          <div className="">
            <span className="tracking-wide">
              <span className="text-7xl font-semibold">0.00</span>
              <span className="text-2xl">STX /</span>
              <span className="text-gray-500 text-2xl"> 0.00NGN</span>
            </span>
          </div>
          <div className="flex justify-start items-center gap-4  py-4">
            <span className="text-gray-500">Q0GP2DPPE4H9N0G....</span>
            <FiCopy className="ml-2 text-[#BFBFBF]" />
          </div>
          <div className="flex justify-start items-center gap-4 py-4 text-white">
            <button className="bg-red-500 py-3 lg:px-10 px-5 rounded flex gap-2 justify-between items-center ">
              <ArrowUpIcon className="h-5 w-5" />
              Send
            </button>
            <button className="bg-red-500 py-3 lg:px-8 px-4 rounded flex gap-2 justify-between items-center">
              <ArrowDownIcon className="h-5 w-5" />
              Receive
            </button>
          </div>
        </div>
        <div className="flex  flex-col gap-4 justify-start md:justify-center bg-[#FCFCFC] rounded shadow-sm px-4 py-6">
          <div className="mr-auto">
            <span>Quick Links</span>
          </div>
          <div className=" grid grid-cols-2  sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-7">
            <div className="bg-white flex flex-col justify-between gap-4 items-center rounded-lg w-full py-6 border-2">
              <span>
                <img src={Dollar} className="h-10 w-10" alt="dollar" />
              </span>
              <span>Buy STX</span>
            </div>
            <div className="bg-white flex flex-col justify-between gap-4 items-center rounded-lg w-full py-6 border-2">
              <span>
                <img src={Dollar} className="h-10 w-10" alt="dollar" />
              </span>
              <span>Withdraw fund</span>
            </div>
            <div className="bg-white flex flex-col justify-between gap-4 items-center rounded-lg w-full py-6 border-2">
              <span>
                <img src={Dollar} className="h-10 w-10" alt="dollar" />
              </span>
              <span>Fund account</span>
            </div>
            <div className="bg-white flex flex-col justify-between gap-4 items-center rounded-lg w-full py-6 border-2">
              <span>
                <img src={Dollar} className="h-10 w-10" alt="dollar" />
              </span>
              <span>Bank transfer</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[#FCFCFC] px-4 py-6 sm:col-span-2">
          <div className="flex justify-between">
            <div>Transactions</div>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button>
                    <button className=" flex justify-between gap-2 items-center rounded-xl text-gray-200 border px-3 py-1">
                      <BsClipboardPlus className="h-5 w-5 " />
                      Export
                    </button>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 pl-2 pr-12 w-max ">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                        <div className="relative grid text-[14px] gap-4 bg-white p-2 text-gray-200  ">
                          <div className=" px-4 py-2 hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap ">
                            Export as .xlsx
                          </div>

                          <div className="px-4 py-2 hover:bg-gray-300 rounded cursor-pointer hover:text-red-400 whitespace-nowrap">
                            Export as .doc
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
          {historyData.length > 0 ? (
            <div className="overflow-x-auto  relative py-4 bg-white rounded md:items-start">
              <table className="w-full text-sm text-left whitespace-nowrap text-gray-500 ">
                <thead className="text-xs  text-gray-700 border-b   ">
                  <tr>
                    <th scope="col" className="py-3 px-6   bg-white ">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-black  "
                      />
                    </th>
                    <th scope="col" className="py-3 px-6   z-10  bg-white ">
                      Transaction ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Transaction Type
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Transaction Date
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Transaction Amount
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Receiver Address
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Payment Type
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="hover:bg-[#dadada]">
                  {historyData.map((history, index) => {
                    return (
                      <tr
                        className="py-6 text-[#BFBFBF] hover:bg-gray-200  hover:text-black bg-white "
                        key={index}
                      >
                        <th
                          scope="row"
                          className="py-5 px-6 font-medium text-gray-900 whitespace-nowrap "
                        >
                          <input
                            id="default-radio-1"
                            type="radio"
                            value=""
                            name="default-radio"
                            className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-black  "
                          />
                        </th>
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium  whitespace-nowrap "
                        >
                          {history.id}
                        </th>
                        <td className=" py-4 text-center text-black ">
                          {" "}
                          {history.transactionType}
                        </td>
                        <td className="py-4  text-center "> {history.date}</td>
                        <td className="py-4 px-6  text-black">
                          {" "}
                          {history.amount}
                        </td>
                        <td className="py-4 px-6 ">
                          {history.receiverAddress}
                        </td>
                        <td className="py-4 px-6 text-black">
                          {history.paymentType}
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`py-2 px-4 rounded  ${
                              history.status === "Completed"
                                ? "text-[#44C13C] bg-[#F8FDF7] px-3"
                                : history.status === "Cancelled"
                                ? "text-[#F01E1E] bg-[#FEF5F5]"
                                : "text-[#F5B81D] bg-[#FFFCF5] px-6"
                            }`}
                          >
                            {history.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-12 py-8">
              <img src={Vault} alt="vault" />
              <div className="text-[#BFBFBF] flex flex-col gap-1 justify-center items-center">
                <span>This is where you’ll see all your transactions.</span>
                <span>Get some STX to get started.</span>
              </div>
              <div>
                <button className="text-red-500 bg-[#FFF5F7] px-6 rounded py-2 text-sm">
                  Fund your account
                </button>
              </div>
            </div>
          )}

          {/* <div className="overflow-x-auto  relative py-4 bg-white rounded md:items-start">
            <table className="w-full text-sm text-left whitespace-nowrap text-gray-500 ">
              <thead className="text-xs  text-gray-700 border-b   ">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 sticky left-0 z-10  bg-white "
                  >
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-black  "
                    />
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 sticky left-12  z-10  bg-white "
                  >
                    Transaction ID
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Transaction Type
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Transaction Date
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Transaction Amount
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Receiver Address
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Payment Type
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="hover:bg-[#dadada]">
                {historyData.map((history, index) => {
                  return (
                    <tr
                      className="py-4 hover:bg-gray-200 hover:text-semibold bg-white "
                      key={index}
                    >
                      <th
                        scope="row"
                        className="py-3 px-6 bg-white lg:bg-transparent font-medium text-gray-900 whitespace-nowrap sticky left-0 z-10"
                      >
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-black  "
                        />
                      </th>
                      <th
                        scope="row"
                        className="py-3 px-6 font-medium bg-white lg:bg-transparent hover:bg-gray-200 text-[#BFBFBF] whitespace-nowrap sticky left-12 z-10"
                      >
                        {history.id}
                      </th>
                      <td className=" py-3 text-center text-semibold">
                        {" "}
                        {history.transactionType}
                      </td>
                      <td className="py-3  text-center text-[#BFBFBF]">
                        {" "}
                        {history.date}
                      </td>
                      <td className="py-3 px-6  text-semibold">
                        {" "}
                        {history.amount}
                      </td>
                      <td className="py-3 px-6 text-[#BFBFBF]">
                        {history.receiverAddress}
                      </td>
                      <td className="py-3 px-6 text-semibold">
                        {history.paymentType}
                      </td>
                      <td className="py-3 px-6 text-[#BFBFBF]">
                        {history.status}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
