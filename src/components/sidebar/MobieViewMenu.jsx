import React from "react";
import lib from "../../lib/lib";
import { Link } from "react-scroll";
import { IoMdClose } from "react-icons/io";

const MobieViewMenu = ({ open, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div onClick={onClose} className="fixed inset-0 bg-black/50 z-40" />
      )}

      {/* Drawer Menu (left) */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-[#111] text-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-[#ffffffbe]">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-yellow-400"
          >
            <IoMdClose size={26} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="px-6 py-4 flex flex-col gap-3">
          {lib?.menuItem?.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path.replace("#", "")}
                smooth={true}
                spy={true}
                duration={500}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800 hover:text-yellow-400 transition"
              >
                <div className="text-[#0285b4]">
                  {" "}
                  <Icon size={20} />
                </div>
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobieViewMenu;
