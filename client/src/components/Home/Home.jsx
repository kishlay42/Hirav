import React from "react";
import { FaQs, HowItWorks, Component, HeroSection } from "../index";
const Home = () => {
  return (
    <div className="w-4/5 mx-auto ">
      <HeroSection />
      <div >
        <img src="/img/vector-1.svg" alt="" className="mx-auto pt-12 mb-20" />
      </div>
      <Component />
      <HowItWorks />     
      <FaQs /> 
    </div>
  );
};

export default Home;
