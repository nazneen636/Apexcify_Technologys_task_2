import { Link } from "react-router";
import lib from "../../lib/lib";
export default function RightSidebar() {
  return (
    <div className="w-[70px] bg-black text-white flex flex-col items-center justify-between py-6 rounded-full shadow-lg px-2 blurRightSideBar">
      {/* Menu */}
      <div className="flex flex-col items-center space-y-4">
        {lib?.menuItem?.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              to={item.path}
              key={item.id}
              className="p-3.5 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors"
            >
              <Icon size={22} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
