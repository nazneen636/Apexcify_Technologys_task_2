"use client";
import React, { useState, useEffect } from "react";

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
              prevStats[stat.key] + Math.ceil(stat.target / 20), // Increment dynamically
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

  return (
    <div className="bg-yellow rounded-full  mt-28 px-16 py-10 flex items-center justify-between w-full text-gray-100 ">
      {statsData.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col gap-3 items-center justify-center border border-gray-200 px-6 rounded-xl py-4"
        >
          <h1 className="text-6xl font-normal">
            {stats[stat.key]}
            {stat.suffix}
          </h1>
          <p className="text-xl opacity-80">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
