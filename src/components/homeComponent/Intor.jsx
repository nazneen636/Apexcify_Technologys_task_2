import { Cursor, useTypewriter } from "react-simple-typewriter";
import GradientText from "../uiComponent/GradientText";
import { motion } from "motion/react";

const Intor = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 3000,
  });
  return (
    <div>
      <div className="min-h-64 md:h-auto text-white flex items-center flex-col justify-center">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="text-lg md:text-2xl text-center custom-class"
        >
          <span className=""> Hi!</span> <span className="hello">👋</span>{" "}
          <span className="">My name is Nazneen Nahar Rima</span>
        </GradientText>{" "}
        <motion.div
          // variants={lib.container}
          initial={{ opacity: 0 }} // start 50px left
          whileInView={{ opacity: 1 }} // move to normal position
          transition={{
            duration: 2,
            ease: "easeIn",
          }}
          className="text-3xl md:text-4xl"
        >
          <h1 className="md:text-7xl text-center mt-10 leading-[120%]">
            A Professional
          </h1>
          <h2 className="md:text-7xl text-center mt-2 ">
            <span className="text-yellow"> MERN Stack </span>Developer,{" "}
          </h2>
          <h2 className="mt-1 text-center text-2xl md:text-4xl">
            <span className="leading-relaxed">Specializing in</span>
            <br />
            <span className="md:text-4xl  text-yellow-200">{text}</span>
            <Cursor cursorColor="white" />
          </h2>
        </motion.div>
        <div className="relative mt-12">
          <div className="relative z-10  bg-gradient-to-r  to-yellow-400 from-cyan-600 px-6 py-4 border-b border-r border-b-black border-r-black rounded-sm">
            {" "}
            <a
              className="text-2xl"
              href="/Rima Resume.pdf"
              download="My Resume"
            >
              Download CV
            </a>
          </div>
          <div className="absolute z-0 rounded -right-1 -bottom-1 w-full h-full bg-gradient-to-l  to-gray-100 from-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Intor;
