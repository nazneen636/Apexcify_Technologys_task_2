import { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";

const Drawer = ({ onChangeBG, onChangeColor }) => {
  const [open, setOpen] = useState(false);

  // Colors
  const colors = [
    { id: "sunset", value: "--sunset-gradient" },
    { id: "galaxy", value: "--galaxy-gradient" },
    { id: "purple", value: "--purple-gradient" },
    { id: "yellow", value: "--yellow-gradient" },
    { id: "black", value: "--black-gradient" },
    { id: "teal", value: "--teal-gradient" },
    { id: "gray", value: "--gray-gradient" },
  ];

  // Background options
  const bgOptions = [
    { id: "solid", label: "Solid Color" },
    { id: "particles", label: "Particles" },
    { id: "lightening", label: "Lightening" },
    { id: "galaxy", label: "Galaxy" },
    { id: "wavy", label: "Wavy" },
    { id: "gradient", label: "Gradient" },
  ];

  return (
    <>
      {/* Settings Button */}
      <div
        onClick={() => setOpen(true)}
        className="fixed w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center md:bg-[#3a363673] text-yellow-500 text-2xl top-4.5 md:top-9 right-90 md:right-12 z-30 cursor-pointer hover:bg-yellow-200 hover:text-black transition-all duration-200"
      >
        <IoSettingsSharp />
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-[#111] text-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Configuration</h2>
          <button onClick={() => setOpen(false)} className="text-gray-400">
            ✕
          </button>
        </div>

        {/* Colors */}
        <div className="px-6 py-4">
          <h3 className="text-sm font-medium text-gray-400 mb-2">COLORS</h3>
          <div className="flex gap-3 flex-wrap">
            {colors.map((c) => (
              <div
                key={c.id}
                onClick={() => {
                  onChangeColor(`var(${c.value})`);
                  setOpen(false);
                }}
                className="w-8 h-8 rounded-full border-2 border-transparent cursor-pointer hover:scale-110 transition-transform"
                style={{
                  background: c.value.startsWith("--")
                    ? `var(${c.value})`
                    : c.value,
                }}
              />
            ))}
          </div>
        </div>

        {/* Backgrounds */}
        <div className="px-6 py-4">
          <h3 className="text-sm font-medium text-gray-400 mb-2">
            THREE DIMENSIONAL SHAPES
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {bgOptions.map((bg) => (
              <button
                key={bg.id}
                onClick={() => {
                  onChangeBG(bg.id);
                  setOpen(false);
                }}
                className="text-left text-sm text-gray-200 hover:text-yellow-400 transition"
              >
                {bg.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
