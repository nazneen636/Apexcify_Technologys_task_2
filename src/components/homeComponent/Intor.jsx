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
          <h2 className="mt-1 text-center md:text-4xl">
            <span className="">Specializing in</span>{" "}
            <span className="md:text-4xl  text-yellow-200">{text}</span>
            <Cursor cursorColor="white" />
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Intor;
