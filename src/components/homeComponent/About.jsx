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
        className="grid grid-cols-7 gap-8 text-justify"
      >
        <SectionTitle titleText="About Me" />
        <div className="col-span-6">
          <h2 className="text-3xl leading-[130%] capitalize font-semibold">
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
        className="mt-8 text-base leading-[170%] opacity-60! text-justify"
      >
        Hi! I’m Nazneen Nahar Rima, a passionate MERN Stack Developer with 3+
        years of experience. Skilled in React.js, Next.js, Node.js, Express.js
        and MongoDB, I create responsive, scalable, and user-friendly web
        applications while ensuring seamless user experiences and timely
        delivery.
      </motion.p>

      <motion.div
        variants={item}
        className="mt-20 flex justify-between opacity-90  -translate-y-10"
      >
        {serviceGroups?.map((group, groupIndex) => (
          <motion.div
            variants={lib.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            key={groupIndex}
            className="flex flex-col gap-4"
          >
            {group.map((service) => (
              <motion.div
                variants={item}
                key={service.id}
                className="flex gap-4 items-center service-item"
              >
                <FaArrowRightLong className="text-yellow-200 text-xl" />
                <p className="text-base">{service.text}</p>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
