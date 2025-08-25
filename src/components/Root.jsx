import React from "react";
import LeftSidebar from "./sidebar/LeftSideBar";
import RightSidebar from "./sidebar/RightSideBar";

const Root = () => {
  return (
    <div className="flex justify-between items-center px-10">
      <div className="">
        <LeftSidebar />
      </div>
      <div className="">outlet</div>
      <div className="">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Root;
