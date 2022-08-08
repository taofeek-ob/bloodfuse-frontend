import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const SideBar = () => {
  return (
    <div className="flex justify-start w-auto">
      <Link to="/">
        <img className="h-10 w-auto" src={Logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default SideBar;
