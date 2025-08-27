import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import GradientText from "../uiComponent/GradientText";
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
      <div className="text-white flex items-center flex-col justify-center">
        {/* <h4 className="text-2xl text-center">
          <span className="opacity-70 "> Hi!</span>{" "}
          <span className="hello">👋</span>{" "}
          <span className="opacity-50">My name is Nazneen Nahar Rima</span>
        </h4> */}

        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="text-2xl text-center custom-class"
        >
          <span className=""> Hi!</span> <span className="hello">👋</span>{" "}
          <span className="">My name is Nazneen Nahar Rima</span>
        </GradientText>

        <h1 className="text-7xl text-center mt-10 leading-[120%]">
          A Professional
        </h1>
        <h2 className="text-7xl text-center mt-2 ">
          <span className="text-yellow"> MERN Stack </span>Developer,{" "}
        </h2>
        <h2 className="mt-1 text-center text-4xl">
          <span className="">Specializing in</span>{" "}
          <span className="text-4xl  text-yellow-200">{text}</span>
          <Cursor cursorColor="white" />
        </h2>
      </div>
    </div>
  );
};

export default Intor;
