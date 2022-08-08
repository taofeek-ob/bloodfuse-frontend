import React from "react";
import { Navbar, Footer } from "../LandingPage";
import { Outlet } from "react-router-dom";
const LandingLayout = () => {
  return (
    <>
      <Navbar textColor="white" bgColor="primarybg" />
      <Outlet />
      <Footer />
    </>
  );
};

export default LandingLayout;
