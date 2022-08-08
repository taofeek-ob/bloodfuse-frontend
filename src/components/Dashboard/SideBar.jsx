import React from "react";
import { Link } from "react-router-dom";
import { RiHistoryLine } from "react-icons/ri";
import {MdOutlineSpaceDashboard} from 'react-icons/md';
import { BsWallet } from "react-icons/bs";
import { TbHeartbeat } from "react-icons/tb";
import Logo  from "../../assets/logo-dark.png";

const SideBar = () => {
  return (
    <div className="hidden md:flex flex-col items-start gap-4 h-full">
      <Link to="/" className="py-5 px-4">
        <img className="h-10 w-auto" src={Logo} alt="Logo" />
      </Link>

      
      <div className="flex flex-col items-start gap-y-6">
      <Link to="/dashboard" className="text-black py-2 px-4">
        <div className="flex items-center gap-x-3">
        <MdOutlineSpaceDashboard className="h-6 w-6 ml-2" />
        <p>Dashboard</p>
        </div>
      </Link>
      <Link to="/dashboard" className="text-black py-2 px-4">
        <div className="flex items-center gap-x-3">
        <TbHeartbeat className="h-6 w-6 ml-2" />
        <p>Medicals</p>
        </div>
      </Link>
      <Link to="/dashboard" className="text-black py-2 px-4">
        <div className="flex items-center gap-x-3">
        <BsWallet className="h-6 w-6 ml-2" />
        <p>Wallet</p>
        </div>
      </Link>
      <Link to="/dashboard" className="text-black py-2 px-4">
        <div className="flex items-center gap-x-3">
        <RiHistoryLine className="h-6 w-6 ml-2" />
        <p>History</p>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default SideBar;
