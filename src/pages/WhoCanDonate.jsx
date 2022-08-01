import React from "react";
import Outreach from "../assets/Outreach.png";
import HealthyMan from "../assets/HealthyMan.png";
import HealthyMobile from "../assets/HealthyMobile.png";
import { ChevronRightIcon } from "@heroicons/react/outline";
const WhoCanDonate = () => {
  return (
    <div className=" relative h-auto  text-white">
      <div className="relative">
        <img
          src={Outreach}
          alt=""
          className="backdrop-contrast-200 hidden md:block"
        />
        <img
          src={HealthyMobile}
          alt=""
          className="backdrop-contrast-200 md:hidden w-full"
        />

        <h1 class="absolute text-5xl text-[#FCFCFC]  font-bold  top-1/2 left-[36%] md:left-1/4 -translate-x-1/2 -translate-y-1/2">
          Who Is Eligible To Donate
        </h1>
      </div>

      <div className="flex flex-row  mx-auto  mb-20 px-4 sm:px-6 text-black md:mx-5  md:px-10 justify-between ">
        <div className="text-left mt-20  md:mr-8 basis-full lg:basis-1/2">
          <h1 className="text-2xl md:text-lg font-[700] text-semibold my-5 text-center lg:text-left">
            Know if You Are Eligible To Save a Life by Donating Blood
          </h1>
          <div className="">
            <h4 className="text-semibold text-[#333333] mb-4">
              To ensure the safety of both patients and donors, these are some
              of the requirements donors must meet to be eligible to donate
              blood based on their donation type
            </h4>
            <h4 className=" font-[700] text-semibold text-black mb-4">
              Here are the essential qualifications, you can choose to donate
              blood:
            </h4>
            <h4 className="text-semibold text-[#333333] mb-4">
              Donor eligibility rules help to protect the health and safety of
              the donor as well as the person who will receive a blood
              transfusion. The guidelines listed below will help you determine
              if you are eligible to donate blood:
            </h4>
            <div className="my-5 w-[90%] md:w-[300px] h-[500px] mx-auto block lg:hidden">
              <img
                src={HealthyMan}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <ul className="marker:text-red-400 list-disc pl-5 space-y-6 text-[#333333] font-light">
              <li>
                To donate blood you must be in good general health, weigh at
                least 110 pounds, and be at least 16 years old.
              </li>
              <li>
                Parental consent is required for blood donation by 16 year olds.
              </li>
              <li>
                No parental consent is required for those who are at least 17
                years old.
              </li>
              <li>
                If you are 76 or older, you will need your doctor’s written
                approval for blood donation
              </li>
              <li>
                Good health means that you feel well and are able to carry out
                normal daily activities.
              </li>
            </ul>
            <div className="lg:mr-auto px-20 md:px-4 flex lg:flex mt-4 sm:mt-8 flex-col gap-4 sm:flex-row items-center justify-center lg:justify-start sm:w-auto">
              <button type="button" className="bttn bttn-primary mb-2 ">
                <span className="text-[12px] md:[14px] lg:text-base py-1 items-center">
                  Donate Now
                </span>
                <ChevronRightIcon className="w-3 h-3 md:w-4 md:h-4 ml-2" />
              </button>
              <button type="button" className=" bttn bttn-extra mb-2 ">
                <span className="text-[12px] md:[14px] lg:text-base py-1 items-center">
                  Learn More
                </span>
                <ChevronRightIcon className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                <ChevronRightIcon className="w-3 h-3 md:w-4 md:h-4 -ml-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="my-20 ml-8 hidden lg:block basis-[40%]">
          <img src={HealthyMan} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default WhoCanDonate;
