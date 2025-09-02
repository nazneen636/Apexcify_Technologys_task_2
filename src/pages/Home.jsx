import React from "react";
import Intro from "../components/homeComponent/Intor";
import StatsSection from "../components/homeComponent/BannerStats";
import About from "../components/homeComponent/About";
import Drawer from "../components/common/Drawer";
import Experience from "../components/homeComponent/Experience";
import TechStack from "../components/homeComponent/TechStack";
import Project from "../components/homeComponent/project/Project";
import Services from "../components/homeComponent/Service";
import ContactPage from "../components/homeComponent/Contact";

const Home = () => {
  return (
    <div>
      <div id="home">
        <Intro />
        <StatsSection />
      </div>
      <Drawer />
      <div id="about">
        <About />
      </div>
      <div id="services">
        {" "}
        <Services />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="techstack">
        <TechStack />
      </div>
      <div id="project" className="pt-20">
        <Project />
      </div>
      <div id="contact" className="pt-20">
        <ContactPage />
      </div>
    </div>
  );
};

export default Home;
