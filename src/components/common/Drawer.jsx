import { IoSettingsSharp } from "react-icons/io5";
import Setting from "./Setting";
import { useState } from "react";

const Drawer = ({ onChangeColor, onChangeBG }) => {
  const [settingOpen, setSettingOpen] = useState(false);

  return (
    <>
      {/* Settings Button */}
      <div
        onClick={() => setSettingOpen(true)}
        className="fixed top-5 right-12 hidden lg:flex w-[42px] h-[42px] rounded-full bg-black font-bold text-yellow-500 items-center justify-center text-2xl z-40 cursor-pointer hover:bg-[#1d1c1ca9]"
      >
        <IoSettingsSharp />
      </div>

      {/* Overlay (click to close) */}
      {settingOpen && (
        <div
          onClick={() => setSettingOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Drawer Panel */}
      <Setting
        open={settingOpen}
        setOpen={setSettingOpen}
        onChangeColor={onChangeColor}
        onChangeBG={onChangeBG}
      />
    </>
  );
};

export default Drawer;
