import React from "react";
import Scientist from "../assets/Lab.png";
import { ChevronRightIcon } from "@heroicons/react/outline";

const About = () => {
  return (
    <div className=" relative mt-10 md:mt-20 h-screen" id="about">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 md:px-10 justify-between">
        <div className=" text-left mt-20">
          <div className="text-lg text-semibold my-5 text-center lg:text-left">WHO WE ARE</div>
          <div className="">
            <h4 className="text-semibold text-[#333333] mb-4">
              At BloodFuse, we know how important blood is for life and we
              believe every Individual should be given an opportunity to stay
              alive, which is why we:
            </h4>
            <div className="my-5 w-[90%] md:w-[60%] md:h-[400px] mx-auto block lg:hidden">
              <img src={Scientist} alt="" className="w-full h-full object-cover"/>
            </div>
            <ul className="marker:text-red-400 list-disc pl-5 space-y-3 text-[#333333]">
              <li>
                Connect Blood Donors & Recipients in a convenient and safe way.
              </li>
              <li>Increase communication with our members.</li>
              <li>Examine critically to ensure alignment.</li>
              <li>Perform extra care from a multi-disciplinary team.</li>
              <li>Are a community based organization.</li>
              <li>
                Are incorporating blockchain technology to our platform, for
                transparency, security of data and decentralization.
              </li>
            </ul>
            <div className="md:mr-auto hidden md:flex md:mt-4 flex-col gap-4 sm:flex-row items-center justify-center md:justify-start w-[70%] sm:w-auto">
              <button
                type="button"
                className="bttn bttn-primary"
              >
                <span className="text-[12px] md:[14px] lg:text-base py-1 items-center">Donate Now</span>
                <ChevronRightIcon className="w-3 h-3 md:w-4 md:h-4 ml-2" />
              </button>
              <button
                type="button"
                className="bttn bttn-tertiary"
              >
                <span className="text-[12px] md:[14px] lg:text-base py-1 items-center">Request Blood</span>
                <ChevronRightIcon className="w-3 h-3 md:w-4 md:h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="my-20 hidden lg:block">
          <img src={Scientist} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
