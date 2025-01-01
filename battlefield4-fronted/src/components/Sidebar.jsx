import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { ImSwitch } from "react-icons/im";
import { menuData } from "../utils/data";

function Sidebar() {
  const [isActive] = useState(2);

  return (
    <div className="h-full w-[6vh] md:w-[9vh] absolute z-20 left-0 top-0 border-r border-gray-500 brightness-75">
      <div className="flex flex-col mr-5 gap-y-3 mt-[17vh]">
        {menuData.map((item, i) => (
          <p
            key={i}
            href={item.href}
            className={`${item.class} w-inline-block relative group`}
          >
            {/* Popup menu text */}
            <div
              className={`absolute z-50 left-full top-1/2 transform -translate-y-1/2 ml-1 opacity-0 group-hover:opacity-100 transition-opacity w-28`}
            >
              <p className="text-xs font-normal uppercase text-white">
                {item.text}
              </p>
            </div>

            {/* Image container */}
            <div
              className={`h-8 w-full hover:brightness-105 border-orange-600 ${
                i === isActive ? "border-l-4 brightness-105" : ""
              }`}
            >
              <img
                src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafabd334e34cd4dbb8ba_side-menu__game-2.png"
                alt={`menu-box-${item.text}`}
                className="w-7 ml-4"
              />
            </div>
          </p>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-8 mt-[35vh]">
        <FaQuestionCircle />
        <ImSwitch />
      </div>
    </div>
  );
}

export default Sidebar;
