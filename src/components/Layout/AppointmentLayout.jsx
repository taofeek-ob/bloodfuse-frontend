import React from "react";
import { Navbar2 } from "../LandingPage";
import { Outlet } from "react-router-dom";
import { Footer } from "../map";
const AppointmentLayout = () => {
  return (
    <div className="w-full">
      <Navbar2 textColor="black" bgColor="white" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppointmentLayout;
