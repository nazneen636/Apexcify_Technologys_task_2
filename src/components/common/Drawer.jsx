import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";

const Drawer = ({ onChangeBG, onChangeColor }) => {
  const [open, setOpen] = useState(false);

  // Colors
  const colors = [
    { id: "orange", value: "#ff4500" },
    { id: "green", value: "#008000" },
    { id: "purple", value: "#6a0dad" },
    { id: "yellow", value: "#ffcc00" },
    { id: "white", value: "#ffffff" },
    { id: "black", value: "#000000" },
    { id: "navy", value: "#0a0a40" },
    { id: "teal", value: "#004d40" },
    { id: "gray", value: "#444444" },
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
        className="fixed w-12 h-12 rounded-full flex items-center justify-center bg-black text-yellow-500 text-2xl bottom-10 right-11 z-50 cursor-pointer"
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
        className={`fixed top-0 right-0 h-full w-80 bg-[#111] text-white shadow-lg z-50 transform transition-transform duration-300 ${
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
                  onChangeColor(c.value);
                  setOpen(false);
                }}
                className="w-8 h-8 rounded-full border-2 border-transparent cursor-pointer hover:scale-110 transition-transform"
                style={{ backgroundColor: c.value }}
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
