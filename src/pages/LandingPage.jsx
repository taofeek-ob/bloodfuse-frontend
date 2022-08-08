import React from "react";

import {
  Hero,
  Details,
  WhoWeAre,
  KnowOurPatients,
  MakeADiff,
} from "../components/LandingPage";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Details />
      <WhoWeAre />
      <KnowOurPatients />
      <MakeADiff />
    </>
  );
};

export default LandingPage;
