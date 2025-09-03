import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";

const Drawer = ({ onChangeBG }) => {
  const [open, setOpen] = useState(false);

  // Background options
  const bgOptions = ["particle", "gradient", "snow", "stars", "lightening"];

  return (
    <>
      {/* Settings Button */}
      <div
        onClick={() => setOpen(true)}
        className="fixed w-12 h-12 rounded-full flex items-center justify-center bg-black text-yellow-500 text-2xl bottom-10 right-11 z-50"
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
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="p-2 bg-red-500 text-white w-full"
        >
          Close
        </button>

        <div className="p-4 flex flex-col gap-3">
          <h2 className="font-semibold">Backgrounds</h2>
          {bgOptions.map((bg) => (
            <button
              key={bg}
              onClick={() => {
                onChangeBG(bg); // change background
                setOpen(false); // close drawer
              }}
              className="px-3 py-2 rounded bg-black text-white hover:bg-gray-700 transition"
            >
              {bg.charAt(0).toUpperCase() + bg.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Drawer;
