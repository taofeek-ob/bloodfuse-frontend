import React from "react";
import AboutWoman from "../../assets/about-woman.png";
import StacksIcon from "../../assets/stacks-icon.png";
import WittyIcon from "../../assets/wittyhub-icon.png";
import CodeUpIcon from "../../assets/codeup-icon.png";

const AboutUs = () => {
  return (
    <>
      <div className="w-full h-[40vh] md:h-[30vh] lg:h-[50vh] relative flex flex-col justify-center">
        <div className="absolute bg-black opacity-30 inset-0"></div>
        <img
          src={AboutWoman}
          alt="Lovely Woman"
          className="absolute bottom-0 left-0 w-full h-full object-center object-cover -z-10"
        />
        <h1 className="text-4xl md:text-5xl text-[#fcfcfc] ml-4 md:ml-8 lg:ml-24 z-10 font-bold">
          About Us
        </h1>
      </div>
      <div className="flex flex-col gap-4 items-start max-w-3xl min-h-[40vh] mx-auto px-8 py-8 md:py-24 text-[#333333] text-base font-mod-light">
        <h1 className="font-[500] font-moderat text-2xl md:text-3xl lg:text-4xl pb-4">
          Serving To Save Lives!
        </h1>
        <p className="pb-4 md:pb-8">
          Founded in 2022, BloodFuse is the fastest growing blood supplier
          throughout Delta state and parts of Nigeria, focused on saving lives
          and connecting everyone together. We are vastly building a community
          of heros and life savers comprised of community leaders and hospitals
          representatives.
        </p>
        <p className="pb-4 md:pb-8">
          We are the blood donation company that makes it easy to connect
          donors, blood banks, and hospitals. Our mission is to help you find
          the donors or donations you need quickly. We know how hard it can be
          to find a way to give blood or receive it when it's needed, so we've
          created a decentralized system where donors, blood banks, and
          hospitals are easily accessed.
        </p>
        <h1 className="font-[500] font-moderat mx-auto md:mx-0 text-2xl md:text-3xl lg:text-4xl pt-6 pb-4">
          Our Partners
        </h1>
        <div className="flex flex-col md:flex-row gap-24 md:gap-16 py-8 md:justify-between w-full">
          <div className="flex flex-col gap-8 items-center justify-center">
            <img src={StacksIcon} alt="" />
            <p className="font-extrabold font-moderat text-base sm:text-xl">STACKS</p>
          </div>
          <div className="flex flex-col gap-8 items-center justify-center">
            <img src={CodeUpIcon} alt="" />
            <p className="font-extrabold font-moderat text-base sm:text-xl">
              CODEUP DIAGNOSTICS
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center justify-center">
            <img src={WittyIcon} alt="" />
            <p className="font-extrabold font-moderat text-base sm:text-xl">WITTYHUB</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
