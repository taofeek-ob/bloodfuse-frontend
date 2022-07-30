import React from "react";
import BloodBankLogo from "../assets/BloodBank.png";
const Details = () => {
  return (
    <div className="h-auto relative ">
      <div className="flex flex-col mt-20 max-w-7xl mx-auto px-4 sm:px-6 justify-center">
        <div className="text-lg text-center font-bold"> EVERY TWO SECONDS</div>
        <div className="mt-5 text-start md:text-center">
          Someone in your community needs blood. This number counter shows how
          many people have needed blood since you arrived here.
        </div>
        <div className="text-incremental my-10 text-center">00 - 499</div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-16 md:gap-4 max-w-7xl my-10 px-6">
          <div className="flex-1 flex flex-col items-center gap-6">
            <img className=" w-14 h-14 " src={BloodBankLogo} alt="Bonnie" />
            <h5 className="text-xl font-medium text-gray-900">
              Donate Now
            </h5>
            <span className="text-sm text-gray-500 ">
              Schedule your appointment now.
            </span>

            <a
              href="#t"
              className="bttn bttn-primary"
            >
              <span className="px-10">Donate</span>
            </a>
          </div>
          <div className="flex-1 flex flex-col items-center gap-6">
            <img className="w-14 h-14" src={BloodBankLogo} alt="Bonnie" />
            <h5 className="text-xl font-medium text-gray-900">
              Can I Donate Blood?
            </h5>
            <span className="text-sm text-gray-500 ">
              Find out your eligibility.
            </span>
            <a
              href="#t"
              className="bttn bttn-primary"
            >
              <span className="px-4">Review Eligibility</span>
            </a>
          </div>
          <div className="flex-1 flex flex-col items-center gap-6">
            <img className="w-14 h-14" src={BloodBankLogo} alt="Bonnie" />
            <h5 className="text-xl font-medium text-gray-900">
              Where To Donate
            </h5>
            <span className="text-sm text-gray-500 ">
              Find a location convenient to you.
            </span>

            <a
              href="#t"
              className="bttn bttn-primary"
            >
              <span className="px-6">Find Center</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
