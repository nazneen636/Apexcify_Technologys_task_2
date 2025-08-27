import React from "react";
import Intro from "../components/homeComponent/Intor";
import StatsSection from "../components/homeComponent/BannerStats";
import About from "../components/homeComponent/About";
import Drawer from "../components/common/Drawer";

const Home = () => {
  return (
    <div>
      <Intro />
      <StatsSection />
      <Drawer />
      <About />
    </div>
  );
};

export default Home;
