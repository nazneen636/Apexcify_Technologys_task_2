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
    <div className="relative">
      <div className="md:hidden flex py-8 w-full bg-black fixed top-0 left-0 z-40"></div>
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
        {/* Mobile modal sidebar */}
        {profileOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 md:hidden">
            <div className="relative w-[90%] max-w-sm">
              {/* Close button with gap */}
              {/* <button
                onClick={() => setProfileOpen(false)}
                className="absolute top-4 right-4 bg-gray-800 text-white rounded-full p-3 z-10 hover:bg-gray-700 transition-all"
              >
                ✕
              </button> */}
              <LeftSidebar
                profileBg={profileBg}
                isMobileOpen={profileOpen}
                onClose={() => setProfileOpen(false)}
              />
            </div>
          </div>
        )}

        <div className="min-h-screen w-full md:w-[60%] px-5 md:px-0 mx-auto">
          <Outlet />
        </div>
        <div className="w-[10%]">
          <div className="fixed right-[40%] top-4 md:right-10 md:top-1/2 md:-translate-y-1/2 z-40">
            <RightSidebar />
          </div>
        </div>
        {/* profile */}
        <div
          onClick={() => setProfileOpen(!profileOpen)}
          className="absolute top-3 right-4 md:hidden w-12 h-12 rounded-full bg-[#ffffff28] font-bold text-yellow-500 flex items-center justify-center text-3xl z-40"
        >
          <span className="fixed">N</span>
        </div>
        <Drawer onChangeColor={handleChangeColor} onChangeBG={setBgType} />
      </div>
    </div>
  );
};

export default Root;
