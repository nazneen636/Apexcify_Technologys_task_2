import { useState } from "react";
import LeftSidebar from "./sidebar/LeftSideBar";
import RightSidebar from "./sidebar/RightSideBar";
import { Outlet } from "react-router";
import BackgroundSwitcher from "./bganimation/BgSwitcher";
import Drawer from "./common/Drawer";

const Root = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileBg, setProfileBg] = useState("var(--profile-gradient)");
  const [bgType, setBgType] = useState("particle");
  const handleChangeColor = (color) => {
    setProfileBg(color);
  };
  return (
    <div className="flex flex-col md:flex-row h-full justify-between items-center relative">
      <BackgroundSwitcher type={bgType} />
      <div
        className={`md:w-[30%] md:mt-0 mt-24 ${
          profileOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="md:fixed top-10 md:top-4 md:left-10">
          <LeftSidebar profileBg={profileBg} />
        </div>
      </div>
      <div className="min-h-screen w-[60%] mx-auto">
        <Outlet />
      </div>
      <div className="w-[10%]">
        <div className="fixed right-[40%] top-4 md:right-10 md:top-1/2 md:-translate-y-1/2">
          <RightSidebar />
        </div>
      </div>
      {/* profile */}
      <div
        onClick={() => setProfileOpen(!profileOpen)}
        className="absolute top-6 right-4 md:hidden w-12 h-12 rounded-full bg-[#ffffff50] font-bold text-yellow-500 flex items-center justify-center text-3xl"
      >
        <span className="fixed">N</span>
      </div>
      <Drawer onChangeColor={handleChangeColor} onChangeBG={setBgType} />
    </div>
  );
};

export default Root;
