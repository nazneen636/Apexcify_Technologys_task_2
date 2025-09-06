import { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import SectionTitle from "../common/SectionTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lib from "../../lib/lib";
import { motion } from "motion/react";

const About = () => {
  const item = lib.item;

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
    <motion.div
      variants={lib.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className=""
    >
      <motion.div
        variants={item}
        className="md:grid grid-cols-7 gap-8 md:text-justify"
      >
        <SectionTitle titleText="About Me" />
        <div className="col-span-6">
          <h2 className="mt-3 md:mt-0 text-xl md:text-3xl leading-[130%] capitalize font-semibold">
            A passionate{" "}
            <span className="bg-gradient-to-l  to-yellow-200 from-cyan-300 bg-clip-text text-transparent px-1 rounded">
              MERN Stack Developer
            </span>{" "}
            turning ideas into visually stunning, user-friendly, responsive
            websites.
          </h2>
        </div>
      </motion.div>

      <motion.p
        variants={item}
        className="mt-4 md:mt-8 text-xs md:text-base leading-[170%] opacity-60! text-justify"
      >
        Hi! I’m Nazneen Nahar Rima, a passionate MERN Stack Developer with 3+
        years of experience. Skilled in React.js, Next.js, Node.js, Express.js
        and MongoDB, I create responsive, scalable, and user-friendly web
        applications while ensuring seamless user experiences and timely
        delivery.
      </motion.p>

      <motion.div
        variants={item}
        className="mt-20 flex md:flex-row gap-2 md:gap-0 flex-col justify-between opacity-90  -translate-y-10"
      >
        {serviceGroups?.map((group, groupIndex) => (
          <motion.div
            variants={lib.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            key={groupIndex}
            className="flex  flex-col gap-2 md:gap-4"
          >
            {group.map((service) => (
              <motion.div
                variants={item}
                key={service.id}
                className="flex gap-4 items-center service-item"
              >
                <FaArrowRightLong className="text-yellow-200 text-sm md:text-xl" />
                <p className="text-[11px] md:text-base">{service.text}</p>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
