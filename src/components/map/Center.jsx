import React from "react";


const Center = ({ handleClick, setIndex, CenterList }) => {
  const clickHandler = (e) => {
    setIndex(e);
    handleClick();
  };
  if(CenterList.length <= 0 ) return <>No centers found</>
  return (
    <div className="w-full">
      {CenterList?.map((center, index) => {
        return (
          <div
            className="mb-6 flex flex-col md:border-0 border border-x-0 border-b-0 border-t-gray-500 "
            key={index}
          >
            <div className=" py-4 md:pb-2">
              <span>{center.name}</span>
            </div>
            <div className="text-sm pb-2">
              <span>{center.address}</span>
            </div>
            <div className="text-sm pb-2">
              <span>{center.date}</span>
            </div>
            <div className="text-sm pb-2">
              <span>{center.time}</span>
            </div>
            <div className="text-sm pb-2">
              <span>{center.appointment} Appointment Remaining</span>
            </div>
            <div className="pt-2 text-sm lg:text-base">
              <button
                className="rounded bg-red-500 text-white px-8 py-2"
                onClick={() => clickHandler(index)}
              >
                Schedule Appointment
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Center;
