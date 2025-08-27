import React from "react";

const SectionTitle = ({ titleText, className }) => {
  return (
    <div>
      <h4
        className={`${className} text-2xl opacity-70 flex gap-3 items-center `}
      >
        {" "}
        <div className="w-2 h-2 bg-white rounded-full inline-block"></div>
        <div className="">{titleText}</div>
      </h4>
    </div>
  );
};

export default SectionTitle;
