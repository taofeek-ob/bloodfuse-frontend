import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-dark.png";

const SideBar = () => {
  return (
    <div className="flex flex-col items-start gap-4 px-4 bg-red-200 h-full">
      <Link to="/">
        <img className="h-10 w-auto" src={Logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default SideBar;
