import { useState } from "react";
import LeftSidebar from "./sidebar/LeftSideBar";
import RightSidebar from "./sidebar/RightSideBar";
import { Outlet } from "react-router";
import BackgroundSwitcher from "./bganimation/BgSwitcher";
import Drawer from "./common/Drawer";
import MobieViewMenu from "./sidebar/MobieViewMenu";
import { FaBars } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import Setting from "./common/Setting";

const Root = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);
  const [profileBg, setProfileBg] = useState("var(--profile-gradient)");
  const [bgType, setBgType] = useState("particle");
  const handleChangeColor = (color) => {
    setProfileBg(color);
  };
  return (
    <div className="relative overflow-x-hidden">
      <div className="lg:hidden flex py-8 w-full bg-black fixed top-0 left-0 z-30"></div>
      <div className="flex flex-col lg:flex-row h-full justify-between items-center relative">
        <BackgroundSwitcher type={bgType} />
        <div className="lg:w-[30%] lg:mt-0 mt-24 hidden lg:block">
          <div className="lg:fixed top-10 lg:top-4 lg:left-10">
            <LeftSidebar profileBg={profileBg} />
          </div>
        </div>
        {/* Mobile modal sidebar */}
        {profileOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 lg:hidden w-full">
            <div className="relative w-[95%]">
              <LeftSidebar
                profileBg={profileBg}
                isMobile={true}
                onClose={() => setProfileOpen(false)}
              />
            </div>
          </div>
        )}
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 lg:hidden w-full">
            <MobieViewMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
          </div>
        )}

        {settingOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 lg:hidden w-full"
            onClick={() => setSettingOpen(false)} // overlay closes modal
          >
            <div
              className="relative w-[90%] max-w-lg"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside Setting
            >
              <Setting
                open={settingOpen}
                setOpen={() => setSettingOpen(false)}
                onChangeColor={handleChangeColor}
                onChangeBG={setBgType}
              />
            </div>
          </div>
        )}

        <div className="min-h-screen w-full lg:w-[60%] px-5 lg:px-0 mx-auto">
          <Outlet />
        </div>
        <div className="lg:w-[10%]">
          <div className="lg:fixed right-[40%] top-4 lg:right-10 lg:top-1/2 lg:-translate-y-1/2 z-40">
            <RightSidebar />
          </div>
        </div>
        {/* profile */}
        {!profileOpen && (
          <div
            onClick={() => setProfileOpen(true)}
            className="cursor-pointer fixed top-3.5 right-20 lg:hidden w-[42px] h-[42px] rounded-full bg-[#ffffff28] font-bold text-yellow-500 flex items-center justify-center text-[27px] z-40"
          >
            <span className="fixed">N</span>
          </div>
        )}
        {!menuOpen && (
          <div
            onClick={() => setMenuOpen(true)}
            className="cursor-pointer fixed top-4 right-6 lg:hidden w-10 h-10 rounded-lg bg-[#ffffff28] font-bold  flex items-center justify-center text-xl z-40"
          >
            <FaBars />
          </div>
        )}
        {!settingOpen && (
          <div
            onClick={() => setSettingOpen(true)}
            className="cursor-pointer fixed top-3.5 right-32 lg:hidden w-10 h-10 rounded-lg font-bold  flex items-center justify-center text-[26px] z-40 text-yellow-500"
          >
            <IoSettingsSharp />
          </div>
        )}
        <Drawer
          open={settingOpen}
          setOpen={setSettingOpen}
          onChangeColor={handleChangeColor}
          onChangeBG={setBgType}
        />
      </div>
    </div>
  );
};

export default Root;
