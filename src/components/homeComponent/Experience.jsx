import React from "react";
import SectionTitle from "../common/SectionTitle";
import { RiArrowRightUpLine } from "react-icons/ri";
import { motion } from "motion/react";
import lib from "../../lib/lib";

const jobItem = [
  {
    id: 1,
    year: 2025,
    position: "Intern Frontend Developer",
  },
  {
    id: 2,
    year: 2025,
    position: "Junior Frontend Developer",
  },
];
const trainingItem = [
  {
    id: 1,
    year: 2025,
    position: "MERN Stack Development",
  },
  {
    id: 2,
    year: 2024,
    position: "Frontend Development with React",
  },
];
const Experience = () => {
  const item = lib.item;
  return (
    <div className="">
      {" "}
      <div className="">
        <SectionTitle titleText="Experience" />
      </div>
      <motion.div
        variants={lib.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="relative mt-8  flex justify-between w-full bg-yellow rounded-lg"
      >
        <motion.div variants={item} className="w-full border-r border-gray-500">
          <h2 className="font-bold mb-10 text-2xl opacity-90">
            Job Experience
          </h2>
          <motion.div
            variants={lib.container}
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-10"
          >
            {jobItem?.map((job) => (
              <motion.div
                key={job.id}
                variants={item}
                className="flex gap-5 items-center group"
              >
                <div className="bg-black rounded-full group-hover:bg-white w-8 h-8 flex items-center justify-center duration-300 transition-all aspect-square">
                  <RiArrowRightUpLine className="text-white text-2xl group-hover:text-black duration-300 transition-all" />
                </div>
                <div className="group-hover:text-yellow-200">
                  <p className="opacity-70">{job?.year}</p>
                  <h4 className="text-lg font-medium mt-1 opacity-90">
                    {job?.position}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div variants={item} className="w-full ml-16">
          <h2 className="font-bold mb-10 text-2xl opacity-90">
            Training Completion
          </h2>
          <motion.div
            variants={lib.container}
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-10"
          >
            {trainingItem?.map((training) => (
              <motion.div
                key={training.id}
                variants={item}
                className="flex gap-5 items-center group"
              >
                <div className="bg-black rounded-full group-hover:bg-white w-8 h-8 flex items-center justify-center duration-300 transition-all aspect-square">
                  <RiArrowRightUpLine className="text-white text-2xl group-hover:text-black duration-300 transition-all" />
                </div>
                <div className="group-hover:text-yellow-200">
                  <p className="opacity-70">{training?.year}</p>
                  <h4 className="text-lg font-medium mt-1 opacity-90">
                    {training?.position}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
