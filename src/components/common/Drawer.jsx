// Drawer.jsx
import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";

const Drawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="fixed w-12 h-12 rounded-full flex items-center justify-center bg-black  text-yellow-500 text-2xl  bottom-10 right-11"
      >
        <IoSettingsSharp />
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        ></div>
      )}

      {/* Drawer panel */}
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
        <div className="p-4">Drawer content here</div>
      </div>
    </>
  );
};

export default Drawer;
