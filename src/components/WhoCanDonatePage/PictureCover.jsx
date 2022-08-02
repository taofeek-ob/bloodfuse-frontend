import React from 'react'
import Outreach from "../../assets/Outreach.png";

const PictureCover = () => {
  return (
    <div className="w-full h-[40vh] md:h-[30vh] lg:h-[50vh] relative flex flex-col justify-center">
        <div className="absolute bg-black opacity-30 inset-0"></div>
        <img
          src={Outreach}
          alt="Healthy Man"
          className="absolute bottom-0 left-0 w-full h-full object-center object-cover -z-10"
        />
        <h1 className="text-4xl md:text-5xl text-[#fcfcfc] ml-4 md:ml-8 lg:ml-16 z-10 font-bold">
          Who Is Eligible To Donate
        </h1>
      </div>
  )
}

export default PictureCover