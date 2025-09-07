"use client";
import { useState, useEffect } from "react";
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

  const item = lib.item;
  return (
    <motion.div
      className="bg-yellow rounded-full mt-12 md:mt-16 px-2 md:px-16 md:py-10 flex items-center justify-center gap-4 w-full text-gray-100"
      variants={lib.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      {statsData.map((stat) => (
        <motion.div
          key={stat.id}
          variants={item} // ✅ assign child variant here
          className="flex flex-col gap-2 md:gap-3 items-center justify-center border border-gray-200 md:px-6 px-2 rounded-xl py-6"
        >
          <h1 className="text-2xl md:text-5xl font-normal">
            {stats[stat.key]}
            {stat.suffix}
          </h1>
          <p className="text-[10px] md:text-lg opacity-80 text-center">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;
