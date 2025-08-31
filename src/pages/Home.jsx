import React from "react";
import Intro from "../components/homeComponent/Intor";
import StatsSection from "../components/homeComponent/BannerStats";
import About from "../components/homeComponent/About";
import Drawer from "../components/common/Drawer";
import Experience from "../components/homeComponent/Experience";
import TechStack from "../components/homeComponent/TechStack";
import Project from "../components/homeComponent/project/Project";

const Home = () => {
  return (
    <div>
      <Intro />
      <StatsSection />
      <Drawer />
      <About />
      <Experience />
      <TechStack />
      <Project />
    </div>
  );
};

export default Home;
