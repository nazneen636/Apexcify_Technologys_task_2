import React from "react";
import Intro from "../components/homeComponent/Intor";
import StatsSection from "../components/homeComponent/BannerStats";
import About from "../components/homeComponent/About";
import Drawer from "../components/common/Drawer";
import Experience from "../components/homeComponent/Experience";

const Home = () => {
  return (
    <div>
      <Intro />
      <StatsSection />
      <Drawer />
      <About />
      <Experience />
    </div>
  );
};

export default Home;
