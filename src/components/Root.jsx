import React from "react";
import LeftSidebar from "./sidebar/LeftSideBar";
import RightSidebar from "./sidebar/RightSideBar";

const Root = () => {
  return (
    <div className="flex justify-between items-center px-10">
      <div className="fixed top-0">
        <LeftSidebar />
      </div>
      <div className="h-[200vh]">outlet</div>
      <div className="fixed right-10 top-1/2 -translate-y-1/2">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Root;
