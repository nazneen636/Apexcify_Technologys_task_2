import profile from "../../assets/profile.png";
// import { TfiGithub } from "react-icons/tfi";
import { GoArrowUpRight } from "react-icons/go";
import lib from "../../lib/lib";
import SpotlightCard from "../uiComponent/SpotLight";

export default function LeftSidebar({ profileBg }) {
  return (
    <SpotlightCard className="h-[95vh] w-80 bg-black text-white flex flex-col items-center justify-between py-6 rounded-2xl shadow-md shadow-gray-100">
      {/* Header - Available for projects */}
      <div className="w-full flex flex-col items-center">
        <div className="bg-gray-900 rounded-full px-4 py-1 text-sm text-gray-300 mb-10">
          Available for{" "}
          <span className="text-yellow-400 font-semibold">1 projects</span>
        </div>

        {/* Profile Image */}
        <div
          className="w-56 h-56 rounded-xl overflow-hidden"
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
        <p className="text-gray-300 text-xl mt-2">rimann636@gmail.com</p>
        <p className="text-base text-gray-500">From Dhaka, Bangladesh</p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-6">
          {lib?.socialMediaItem?.map((item) => {
            const Item = item.icon;
            return (
              <a
                key={item.id}
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              >
                <Item />
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer Button */}
      <button className="flex items-center justify-between w-[85%] bg-gray-900 px-6 py-2 rounded-full hover:bg-gray-800">
        <span>Get Started</span>
        <span className="bg-white text-black p-2.5 rounded-full">
          <GoArrowUpRight className="text-xl" />
        </span>
      </button>
    </SpotlightCard>
  );
}
