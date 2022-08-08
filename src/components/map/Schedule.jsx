import React, { useState } from "react";
import CenterList from "./CenterList";
import Link2Dashboard from "./Link2Dashboard";

const Schedule = ({ index }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {!show ? (
        CenterList.filter((center, e) => e === index).map(({ name, x }) => {
          return (
            <div
              className="mb-4 flex flex-col  md:border-0 border border-x-0 border-b-0 border-t-gray-500 "
              key={x}
            >
              <div className="py-3 md:pb-2 ">
                <span>{name}</span>
              </div>
              <div className=" pt-2 pb-6 text-sm">
                <span>Appointment Schedule</span>
              </div>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Fullname"
                  type="text"
                  placeholder="Fullname"
                />
              </div>
              <div className="mb-6">
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="phone"
                  required
                />
              </div>
              <div className="mb-6 flex justify-between gap-2">
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="date"
                  placeholder="date"
                  required
                />
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="time"
                  type="time"
                  placeholder="00:00"
                  required
                />
              </div>
              <div className="pb-4">
                <button
                  className="rounded bg-red-500 text-white px-8 py-2"
                  onClick={() => setShow(!show)}
                >
                  Schedule Appointment
                </button>
              </div>
              <div className="pt-2 text-sm">
                <span className="font-bold">Note :</span> After booking your
                appointment with donation center, blood bank or hospital you’ll
                need to log into your dashboard to be able to view or cancel
                appointments.
              </div>
            </div>
          );
        })
      ) : (
        <Link2Dashboard />
      )}
      {}
    </>
  );
};

export default Schedule;
