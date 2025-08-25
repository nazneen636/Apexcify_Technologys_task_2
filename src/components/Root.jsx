import React from "react";
import LeftSidebar from "./sidebar/LeftSideBar";

const Root = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <LeftSidebar />
      </div>
      <div className="">outlet</div>
      <div className="">rightSide</div>
    </div>
  );
};

export default Root;
