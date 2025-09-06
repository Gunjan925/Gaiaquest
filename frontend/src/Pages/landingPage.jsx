import { useState } from "react";
import RoleSelection from "./roleSelection";
import XPlanet from "./xpPlanet";
import GetStarted from "./getStarted";
import WhyWorks from "./whyWorks";
import AboutUs from "./aboutUs";
import ContactUs from "./contactUs";

function LandingPage() {

  return (
    <>
      <GetStarted/>
      <RoleSelection/>
      <XPlanet/>
      <WhyWorks/>
      <AboutUs/>
      <ContactUs/>
    </>
  );
}

export default LandingPage;
