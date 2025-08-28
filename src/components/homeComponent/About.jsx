import React from "react";
import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";
import SectionHeading from "../common/SectionHeading";
import SectionTitle from "../common/SectionTitle";
import SplitText from "../uiComponent/SplitText";
const About = () => {
  const serviceGroups = [
    [
      { id: 1, text: "Full-Stack Solutions" },
      { id: 2, text: "UI/UX Design" },
    ],
    [
      { id: 3, text: "Scalability & Performance" },
      { id: 4, text: "Timely Delivery" },
    ],
    [
      { id: 5, text: "Responsive Web Design" },
      { id: 6, text: "Collaboration & Support" },
    ],
  ];
  return (
    <div>
      <div className="flex flex-col gap-8 mt-28">
        <div className="grid grid-cols-7 gap-8 text-justify">
          <SectionTitle titleText="About Me" />
          <div className="col-span-6">
            <h2 className="text-4xl leading-[130%]">
              A passionate{" "}
              <span className="text-yellow-200">MERN Stack Developer</span>{" "}
              turning ideas into visually stunning, user-friendly,{" "}
              <span className="text-yellow-200">responsive</span> websites.
            </h2>
          </div>
        </div>
        <p className="mt-4 text-lg leading-[170%] opacity-60 text-justify">
          Hi! I’m Nazneen Nahar Rima, a passionate MERN Stack Developer with 3+
          years of experience. Skilled in React.js, Next.js, Node.js, Express.js
          and MongoDB, I create responsive, scalable, and user-friendly web
          applications while ensuring seamless user experiences and timely
          delivery.
        </p>
        <div className="mt-8 flex justify-between opacity-90">
          {serviceGroups?.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col gap-4">
              {group.map((item) => (
                <div className="flex gap-4 items-center">
                  <FaArrowRightLong className="text-yellow text-xl" />
                  <p className="text-base">{item.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
