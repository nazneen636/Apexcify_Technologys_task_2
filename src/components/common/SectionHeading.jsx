"use client";
import React from "react";

const SectionHeading = ({ children, className }) => {
  return (
    <div>
      <h2 className={`text-4xl leading-[130%] ${className}`}>{children}</h2>
    </div>
  );
};

export default SectionHeading;
