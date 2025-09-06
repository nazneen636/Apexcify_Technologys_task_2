import React from "react";
import lib from "../../lib/lib";
import { Link } from "react-scroll";
import { FaCross } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const MobieViewMenu = ({ open, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={<IoMdClose />}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-gray-900 text-white p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={onClose}>
            <FaCross size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-4">
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
                className="flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-gray-700"
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobieViewMenu;
