import React, { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import SectionTitle from "../common/SectionTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lib from "../../lib/lib";
import { motion } from "motion/react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const paraRef = useRef(null);
  const serviceRef = useRef(null);
  const item = lib.item;
  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: textRef.current,
  //       start: "top 80%", // when heading comes into view
  //     },
  //   });

  //   // --- HEADING ANIMATION ---
  //   const headingWords = textRef.current.innerText.split(" ");
  //   textRef.current.innerHTML = headingWords
  //     .map(
  //       (word) =>
  //         `<span class="inline-block overflow-hidden">
  //           <span class="inline-block translate-y-[100%] opacity-0">${word}&nbsp;</span>
  //         </span>`
  //     )
  //     .join(" ");

  //   tl.to(textRef.current.querySelectorAll("span span"), {
  //     y: 0,
  //     opacity: 1,
  //     // color: "#FACC15", // animated color
  //     duration: 1,
  //     ease: "power4.out",
  //     stagger: {
  //       each: 0.08,
  //       from: "random",
  //     },
  //   });

  //   // --- PARAGRAPH ANIMATION ---
  //   const paraWords = paraRef.current.innerText.split(" ");
  //   paraRef.current.innerHTML = paraWords
  //     .map(
  //       (word) =>
  //         `<span class="inline-block opacity-0 translate-x-10">${word}&nbsp;</span>`
  //     )
  //     .join(" ");

  //   tl.to(
  //     paraRef.current.children,
  //     {
  //       opacity: 1,
  //       x: 0,
  //       duration: 0.8,
  //       ease: "power3.out",
  //       stagger: {
  //         each: 0.03,
  //         from: "start",
  //       },
  //     },
  //     "+=0.2"
  //   );

  //   // --- SERVICE GROUP ANIMATION ---
  //   const serviceItems = serviceRef.current.querySelectorAll(".service-item");
  //   tl.from(
  //     serviceItems,
  //     {
  //       y: 0,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "back.out(1.7)",
  //       stagger: 0.1,
  //     },
  //     "+=0.2"
  //   );
  // }, []);

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
      className="mt-24"
    >
      <motion.div
        variants={item}
        className="grid grid-cols-7 gap-8 text-justify"
      >
        <SectionTitle titleText="About Me" />
        <div className="col-span-6">
          <h2
            // ref={textRef}
            className="text-3xl leading-[130%] capitalize font-semibold"
          >
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
        // ref={paraRef}
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
