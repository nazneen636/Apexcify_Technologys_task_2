"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import lib from "../../lib/lib";

const statsData = [
  {
    id: 1,
    key: "yearsExperience",
    label: "Years of Experience",
    target: 3,
    suffix: "+",
  },
  {
    id: 2,
    key: "completedProjects",
    label: "Completed Projects",
    target: 100,
    suffix: "+",
  },
  {
    id: 3,
    key: "clientSatisfaction",
    label: "Client Satisfactions",
    target: 90,
    suffix: "%+",
  },
];

const StatsSection = () => {
  const [stats, setStats] = useState(
    statsData.reduce((acc, stat) => {
      acc[stat.key] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => {
        const updatedStats = { ...prevStats };
        let allCompleted = true;

        statsData.forEach((stat) => {
          if (prevStats[stat.key] < stat.target) {
            updatedStats[stat.key] = Math.min(
              prevStats[stat.key] + Math.ceil(stat.target / 20),
              stat.target
            );
            allCompleted = false;
          }
        });

        if (allCompleted) clearInterval(interval);
        return updatedStats;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // // Parent container variant for stagger
  // const container = {
  //   hidden: {},
  //   visible: {
  //     transition: {
  //       staggerChildren: 0.3, // each child animates after 0.3s
  //     },
  //   },
  // };

  // // Child item variant
  // const item = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  // };
  const item = lib.item;
  return (
    <motion.div
      className="bg-yellow rounded-full mt-28 px-16 py-10 flex items-center justify-between w-full text-gray-100"
      variants={lib.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      {statsData.map((stat) => (
        <motion.div
          key={stat.id}
          variants={item} // ✅ assign child variant here
          className="flex flex-col gap-3 items-center justify-center border border-gray-200 px-6 rounded-xl py-4"
        >
          <h1 className="text-6xl font-normal">
            {stats[stat.key]}
            {stat.suffix}
          </h1>
          <p className="text-xl opacity-80">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;
