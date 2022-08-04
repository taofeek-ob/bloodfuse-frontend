import React from "react";
import HeroImage from "../../assets/GroupHero.png";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-primarybg relative h-auto text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-start slg:justify-center gap-6 md:flex-row sm:px-6 md:px-8 min-h-[90vh] sm:h-auto">
        <div className="py-8 sm:py-10 md:py-0 flex flex-col items-center justify-center gap-4 w-full lg:w-1/2">
          <div className="text-[30px] md:text-4xl lg:text-5xl xl:text-6xl text-center sm:text-left font-semibold px-4 sm:px-0">
            Save a Life Today By Donating{" "}
            <span className="lg:block text-red-600">Blood</span>
          </div>
          <div className="text-[14px] lg:text-base text-center md:text-left font-[300] text-[#FCFCFC]">
            We are building the largest community where blood can be safely
            donated and accessed.
          </div>
          <div className="md:mr-auto flex flex-col gap-4 sm:flex-row items-center justify-center md:justify-start w-[70%] sm:w-auto">
            <Link to="/book-appointment">
              {" "}
              <button type="button" className="bttn bttn-primary">
                <span className="text-base items-center">Donate Now</span>
                <ChevronRightIcon className="w-4 h-4 ml-2" />
              </button>
            </Link>
            <button type="button" className="bttn bttn-secondary">
              <span className="text-base items-center">Request Blood</span>
              <ChevronRightIcon className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-auto lg:h-full lg:w-1/2">
          <img
            className=" w-full max-w-2xl h-auto"
            src={HeroImage}
            alt="Doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
