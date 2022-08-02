import React from "react";
import Outreach from "../assets/Outreach.png";
import HealthyMan from "../assets/HealthyMan.png";
import { PictureCover, MainBody } from "../components/WhoCanDonatePage";

const WhoCanDonate = () => {
  return (
    <div className=" relative h-auto  text-white">
      <PictureCover />

      <MainBody />
    </div>
  );
};

export default WhoCanDonate;
