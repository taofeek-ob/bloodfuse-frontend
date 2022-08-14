import { BellIcon } from "@heroicons/react/outline";

import { ProfilePhoto, DropletIcon } from "../../assets/images";
import { ChevronDownIcon } from "@heroicons/react/solid";

import { MenuIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import SideBarMobile from "./SideBarMobile";
import { useUserContext } from "../../context/user/UserContext";


const Navbar = () => {
  const { username } = useUserContext();
  return (
    <Popover className="flex items-center w-full justify-between px-6 py-6 bg-[#FCFCFC] relative lg:overflow-visible overflow-x-clip">
      <div className="flex items-center w-full justify-between bg-[#FCFCFC]">
        <div className="flex lg:hidden gap-2 items-center">
          <Link to="/">
            <img className="h-8 w-auto" src={DropletIcon} alt="Logo" />
          </Link>
          <Popover.Button className="flex items-center justify-center rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-red-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-8 w-8 text-[#575757]" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden lg:block text-2xl">Dashboard</div>
        <div className="flex items-center gap-6">
          <button className="hidden sm:block bg-[#FFF5F7] py-2 px-4 rounded-full text-[#F00530] border border-transparent focus:border-[#F00530]">
            Connect STX Account
          </button>
          {/* Notifications Icon */}
          <div>
            <BellIcon className="text-[#575757] h-8 w-8 cursor-pointer" />
          </div>
          {/* Profile Icon */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="h-10 w-10 rounded-full overflow-hidden relative">
              <img
                className="absolute h-full w-full object-center object-cover"
                src={ProfilePhoto}
                alt="menu"
              />
            </div>
            <div className="hidden md:flex text-black">{username}</div>
            <ChevronDownIcon className="text-black h-6 w-6" />
          </div>
        </div>
      </div>
      <SideBarMobile />
    </Popover>
  );
};

export default Navbar;
