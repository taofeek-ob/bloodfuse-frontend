import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from "../Dashboard";

const DashboardLayout = () => {
  return (
    <div className="flex items-center justify-between h-auto md:h-screen">
      <div className="w-[20%] h-full">
        <SideBar />
      </div>
      <div className="flex flex-col items-center w-[80%] h-full">
        <Navbar />
        <div className="bg-[#F0F0F0] w-full h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
