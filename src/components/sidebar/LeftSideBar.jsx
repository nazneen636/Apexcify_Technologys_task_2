// import { FaX, FaDribbble, FaInstagram, FaFacebook } from "react-icons/fa";

import { FaDribbble, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function LeftSidebar() {
  return (
    <div className="h-screen w-80 bg-black text-white flex flex-col items-center justify-between py-6 rounded-2xl shadow-lg">
      {/* Header - Available for projects */}
      <div className="w-full flex flex-col items-center">
        <div className="bg-gray-900 rounded-full px-4 py-1 text-sm text-gray-300 mb-6">
          Available for{" "}
          <span className="text-yellow-400 font-semibold">3 projects</span>
        </div>

        {/* Profile Image */}
        <div className="w-40 h-40 rounded-xl overflow-hidden">
          <img
            src="/public/jayden.png" // replace with your image path
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold italic mt-4">Jayden</h1>

        {/* Email */}
        <p className="text-gray-300 mt-2">Jayden.design@gmail.com</p>
        <p className="text-sm text-gray-500">Based in San Fransisco, CA</p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-6">
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <FaX />
          </a>
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <FaDribbble />
          </a>
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Footer Button */}
      <button className="flex items-center justify-between w-40 bg-gray-900 px-4 py-2 rounded-full hover:bg-gray-800">
        <span>Get Started</span>
        <span className="bg-white text-black p-2 rounded-full">➜</span>
      </button>
    </div>
  );
}
