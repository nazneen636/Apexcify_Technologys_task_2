import profile from "../../assets/profile.png";
// import { TfiGithub } from "react-icons/tfi";
import { GoArrowUpRight } from "react-icons/go";
import lib from "../../lib/lib";
import SpotlightCard from "../uiComponent/SpotLight";
import { Link } from "react-router";

export default function LeftSidebar({ isMobile, onClose, profileBg }) {
  return (
    <SpotlightCard className="h-auto w-full xl:w-80 py-4 bg-black text-white flex flex-col items-center gap-6 py-6 rounded-2xl shadow-lg shadow-gray-100 relative">
      {isMobile && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3  text-white w-8 h-8 rounded-full z-10 cursor-pointer hover:border hover:border-yellow-200 transition-all"
        >
          ✕
        </button>
      )}
      {/* Header - Available for projects */}
      <div className="w-full h-fit flex flex-col items-center">
        <div className="bg-gray-900 rounded-full px-4 py-1 text-sm text-gray-300 mb-10">
          Available for{" "}
          <span className="text-yellow-400 font-semibold">1 projects</span>
        </div>

        {/* Profile Image */}
        <div
          className="w-40 h-40 lg:w-56 lg:h-56 rounded-xl overflow-hidden"
          style={{ background: profileBg }}
        >
          <img
            src={profile} // replace with your image path
            alt="Profile"
            className="w-full h-full object-cover pt-4 pl-1"
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold italic mt-2 font-allura tracking-widest">
          Nazneen
        </h1>

        {/* Email */}
        <p className="text-gray-300 text-base lg:text-xl mt-2">
          rimann636@gmail.com
        </p>
        <p className="text-xs lg:text-base text-gray-500">
          From Dhaka, Bangladesh
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-6">
          {lib?.socialMediaItem?.map((item) => {
            const Item = item?.icon;
            return (
              <Link
                target="_blank"
                key={item?.id}
                to={item?.path}
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              >
                <Item />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer Button */}
      <a
        href="#contact"
        className="flex items-center justify-between lg:w-[85%] gap-4 lg:gap-0 bg-gray-900 px-6 py-2 rounded-full hover:bg-gray-800"
      >
        <span>Get Started</span>
        <span className="bg-white text-black p-2 lg:p-2.5 rounded-full">
          <GoArrowUpRight className="text-base lg:text-xl" />
        </span>
      </a>
    </SpotlightCard>
  );
}
