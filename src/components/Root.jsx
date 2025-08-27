import React from "react";
import LeftSidebar from "./sidebar/LeftSideBar";
import RightSidebar from "./sidebar/RightSideBar";
import Background from "./common/Background";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[30%]">
        <div className="fixed top-0 left-10 ">
          <LeftSidebar />
        </div>
      </div>
      <div className="min-h-screen w-[60%] mx-auto mt-20">
        <Outlet />
      </div>
      <div className="w-[10%]">
        <div className="fixed right-10 top-1/2 -translate-y-1/2">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Root;
