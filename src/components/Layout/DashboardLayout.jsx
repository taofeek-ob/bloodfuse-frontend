import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from "../Dashboard";

const DashboardLayout = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5  ">
      <div className="w-[15%] mr-5 h-full">
        <SideBar />
      </div>
      <div className="flex flex-col justify-between items-center w-[85%]">
        <Navbar />
        <div className="bg-[#F0F0F0] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
