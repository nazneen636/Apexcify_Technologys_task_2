import { useState } from "react";
import lib from "../../lib/lib";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import MobieViewMenu from "./MobieViewMenu";
export default function RightSidebar() {
  const [mobileView, setMobileView] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => setOpen(true)}
        className="md:hidden block absolute p-2 rounded bg-[#ffffff28] right-[220px] top-1 hover:bg-yellow-200 hover:text-black shadow"
      >
        <FaBars />
      </div>
      <div className="hidden w-[60px] bg-black text-white md:flex flex-col items-center justify-between py-2 md:py-6 rounded-full! shadow-lg px-2 blurRightSideBar">
        {/* Menu */}
        {/* desktop view menu bar */}
        <div className="flex flex-col items-center space-y-2 ">
          {lib?.menuItem?.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path.replace("#", "")} // remove # for react-scroll
                smooth={true}
                spy={true}
                duration={500}
                className="md:p-3.5 p-2.5 rounded-full hover:bg-[#0000002c] hover:text-white transition-all"
                activeClass="bg-white! text-gray-800!"
              >
                <Icon size={22} />
              </Link>
            );
          })}
        </div>
      </div>
      {/* mobile view menu bar */}
      <div className="md:hidden">
        <MobieViewMenu open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
