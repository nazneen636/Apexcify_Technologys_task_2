import { useState } from "react";
import LeftSidebar from "./sidebar/LeftSideBar";
import RightSidebar from "./sidebar/RightSideBar";
import { Outlet } from "react-router";
import BackgroundSwitcher from "./bganimation/BgSwitcher";
import Drawer from "./common/Drawer";

const Root = () => {
  const [profileBg, setProfileBg] = useState("var(--profile-gradient)");
  const [bgType, setBgType] = useState("particle");
  const handleChangeColor = (color) => {
    setProfileBg(color);
  };
  return (
    <div className="flex h-full justify-between items-center relative">
      <BackgroundSwitcher type={bgType} />

      <div className="w-[30%]">
        <div className="fixed top-4 left-10">
          <LeftSidebar profileBg={profileBg} />
        </div>
      </div>
      <div className="min-h-screen w-[60%] mx-auto">
        <Outlet />
      </div>
      <div className="w-[10%]">
        <div className="fixed right-10 top-1/2 -translate-y-1/2">
          <RightSidebar />
        </div>
      </div>
      <Drawer onChangeColor={handleChangeColor} onChangeBG={setBgType} />
    </div>
  );
};

export default Root;
