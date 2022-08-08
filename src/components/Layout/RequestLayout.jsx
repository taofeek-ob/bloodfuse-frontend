import React from "react";
import { Navbar2 } from "../LandingPage";
import { Outlet } from "react-router-dom";
const RequestLayout = () => {
  return (
    <div className="w-full">
      <Navbar2 textColor="black" bgColor="white" />
      <Outlet />
    </div>
  );
};

export default RequestLayout;
