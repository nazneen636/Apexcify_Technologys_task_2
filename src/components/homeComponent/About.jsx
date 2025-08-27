import React from "react";
import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import SectionTitle from "../common/SectionTitle";
const About = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 mt-28">
        <SectionTitle titleText="About Me" />
        <SectionHeading>
          A passionate{" "}
          <span className="text-yellow-200">MERN Stack Developer</span> turning
          ideas into visually stunning, user-friendly,{" "}
          <span className="text-yellow-200">responsive</span> websites.
        </SectionHeading>
        <p className="mt-4 text-xl leading-[170%] opacity-60 pr-24 text-justify">
          Hi! I’m Nazneen Nahar Rima, a passionate MERN Stack Developer with 3+
          years of experience. Skilled in React.js, Next.js, Node.js, Express.js
          and MongoDB, I create responsive, scalable, and user-friendly web
          applications while ensuring seamless user experiences and timely
          delivery.
        </p>
        <div className="mt-8 flex gap-20 opacity-90">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <FaArrowRightLong className="text-yellow text-2xl" />
              <p className="text-xl">Full-Stack Solutions</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaArrowRightLong className="text-yellow text-2xl" />
              <p className="text-xl">UI/UX Design</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaArrowRightLong className="text-yellow text-2xl" />
              <p className="text-xl">Responsive Web Design</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <FaArrowRightLong className="text-yellow text-2xl" />
              <p className="text-xl">Scalability & Performance</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaArrowRightLong className="text-yellow text-2xl" />
              <p className="text-xl">Timely Delivery</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaArrowRightLong className="text-yellow text-2xl" />
              <p className="text-xl">Collaboration & Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
