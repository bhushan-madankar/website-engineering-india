import React from "react";


import { Navbar, Page, StatsSection } from "../../components/Home";
const HomePage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Page/>
      <StatsSection/>
      
    </div>
  );
};

export default HomePage;
