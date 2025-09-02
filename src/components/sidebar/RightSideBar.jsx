import { Link, useLocation } from "react-router";
import lib from "../../lib/lib";
export default function RightSidebar() {
  const location = useLocation();
  return (
    <div className="w-[60px] bg-black text-white flex flex-col items-center justify-between py-6 rounded-full! shadow-lg px-2 blurRightSideBar">
      {/* Menu */}
      <div className="flex flex-col items-center space-y-2">
        {lib?.menuItem?.map((item) => {
          const Icon = item.icon;
          return (
            <span
              to={item.path}
              key={item.id}
              className={
                location.hash === item.path
                  ? "p-3.5 rounded-full bg-white text-gray-800"
                  : "p-3.5 rounded-full hover:bg-[#0000002c]  transition-all"
              }
            >
              <Icon size={22} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
