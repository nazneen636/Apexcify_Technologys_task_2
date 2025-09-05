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
      <div id="home" className="pt-20">
        <Intro />
        <StatsSection />
      </div>
      <Drawer />
      <div id="about" className="pt-24">
        <About />
      </div>
      <div id="services" className="pt-24">
        {" "}
        <Services />
      </div>
      <div id="experience" className="pt-24">
        <Experience />
      </div>
      <div id="techstack" className="pt-24">
        <TechStack />
      </div>
      <div id="project" className="pt-24">
        <Project />
      </div>
      <div id="contact" className="pt-24">
        <ContactPage />
      </div>
    </div>
  );
};

export default Home;
