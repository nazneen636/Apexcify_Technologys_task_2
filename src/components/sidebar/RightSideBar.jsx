import { useLocation } from "react-router";
import lib from "../../lib/lib";
import { Link } from "react-scroll";
export default function RightSidebar() {
  const location = useLocation();
  return (
    <div className="w-[60px] bg-black text-white flex flex-col items-center justify-between py-6 rounded-full! shadow-lg px-2 blurRightSideBar">
      {/* Menu */}
      <div className="flex flex-col items-center space-y-2">
        {lib?.menuItem?.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.path.replace("#", "")} // remove # for react-scroll
              smooth={true}
              spy={true}
              duration={500}
              className="p-3.5 rounded-full hover:bg-[#0000002c] hover:text-white transition-all"
              activeClass="bg-white! text-gray-800!"
            >
              <Icon size={22} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
