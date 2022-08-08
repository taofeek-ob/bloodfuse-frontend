import React from "react";
import { BellIcon } from "@heroicons/react/outline";
import ProfilePhoto from '../../assets/profile-photo.jpg';
import { ChevronDownIcon } from "@heroicons/react/solid";
import DropletIcon from '../../assets/logo-droplet.png';
import { MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="flex items-center w-full justify-between px-6 py-5 bg-[#FCFCFC]">
      <div className="flex lg:hidden gap-4 items-center">
        <img className="h-8 w-auto" src={DropletIcon} alt="Logo" />
        <MenuIcon className="h-8 w-8" />
      </div>
      <div className="hidden lg:block text-2xl">Dashboard</div>
      <div className="flex items-center gap-6">
        <button className="hidden md:block bg-[#FFF5F7] py-2 px-4 rounded-full text-[#F00530] border border-transparent focus:border-[#F00530]">Connect STX Account</button>
        {/* Notifications Icon */}
        <div><BellIcon className="text-black h-8 w-8 cursor-pointer" /></div>
        {/* Profile Icon */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="h-8 w-8 rounded-full overflow-hidden relative">
            <img className="absolute h-full w-full object-center object-cover" src={ProfilePhoto} alt="menu" />
          </div>
          <div className="hidden md:flex items-center gap-2 cursor-pointer">
          <div className="text-black">OluwaTobi Timothy</div>
          <ChevronDownIcon className="text-black h-6 w-6" />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
