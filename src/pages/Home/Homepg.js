import React from "react";
import Hero from "../../components/Hero";

import { Navbar, Page, StatsSection } from "../../components/Home";
const HomePage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Page/>
      <StatsSection/>
      <Hero />
    </div>
  );
};

export default HomePage;
