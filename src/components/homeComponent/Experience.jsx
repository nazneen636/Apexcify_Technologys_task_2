import React from "react";
import SectionTitle from "../common/SectionTitle";
import { RiArrowRightUpLine } from "react-icons/ri";

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
  return (
    <div>
      {" "}
      <div className="mt-24">
        <SectionTitle titleText="Experience" />
      </div>
      <div className="relative mt-8  flex justify-between w-full bg-yellow rounded-lg">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-40 bg-yellow-200 w-[2px]"></div>
        <div className="w-full">
          <h2 className="font-bold mb-10 text-2xl opacity-90">
            Job Experience
          </h2>
          <div className="flex flex-col gap-10">
            <div className="flex gap-5 items-center group">
              <div className="bg-yellow-200 text-black rounded-full group-hover:bg-white w-8 h-8 flex items-center justify-center duration-300 transition-all">
                <RiArrowRightUpLine className=" text-2xl group-hover:text-black duration-300 transition-all" />
              </div>
              <div className="">
                <p className="opacity-80">2019</p>
                <h4 className="text-2xl mt-1 font-medium opacity-90">
                  Lecturer
                </h4>
              </div>
            </div>
            <div className="flex gap-5 items-center group">
              <div className="bg-black rounded-full group-hover:bg-white w-8 h-8 flex items-center justify-center duration-300 transition-all">
                <RiArrowRightUpLine className="text-white text-2xl group-hover:text-black duration-300 transition-all" />
              </div>
              <div className="">
                <p className="opacity-80">2020- 2024</p>
                <h4 className="text-2xl font-medium mt-1 opacity-90">
                  Administrative Officer
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ml-72">
          <h2 className="font-bold mb-10 text-2xl opacity-90">
            Training Completion
          </h2>
          <div className="flex flex-col gap-10">
            <div className="flex gap-5 items-center group">
              <div className="bg-black rounded-full group-hover:bg-white w-8 h-8 flex items-center justify-center duration-300 transition-all">
                <RiArrowRightUpLine className="text-white text-2xl group-hover:text-black duration-300 transition-all" />
              </div>
              <div className="">
                <p className="opacity-80">2024</p>
                <h4 className="text-lg font-medium mt-1 opacity-90">
                  Frontend Development
                </h4>
              </div>
            </div>
            <div className="flex gap-5 items-center group">
              <div className="bg-black rounded-full group-hover:bg-white w-8 h-8 flex items-center justify-center duration-300 transition-all">
                <RiArrowRightUpLine className="text-white text-2xl group-hover:text-black duration-300 transition-all" />
              </div>
              <div className="">
                <p className="opacity-60">2024- present</p>
                <h4 className="text-2xl font-medium mt-1 opacity-90">
                  MERN Stack Development
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
