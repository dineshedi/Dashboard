import React from "react";
import { SIDE_TOP_MENU } from "./Constant/SideMenu";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {


  const {pathname} = useLocation();
  return (
    <div className="flex flex-col bg-neutral-800 h-screen w-56 text-white">
      <div className="text-white text-4xl font-extrabold px-4 py-5 text-3xl">
        Edison
      </div>
      <div className="flex-1 px-4 py-5 text-md ">
        {SIDE_TOP_MENU.map((item) => (
          <div
            key={item.key}
            className={`mb-3 p-2  hover:bg-neutral-700 rounded-md hover:cursor-pointer ${pathname === item.path ? "bg-neutral-700" : null}`}
          >
            <span>
              <Link to={item.path}> {item.label}</Link>
            </span>
          </div>
        ))}
      </div>
      <div className="px-4 py-5 text-md">
        {/* <div className=""> */}
          <button className="px-10 py-2 ml-7 border-2 rounded text-red-500 hover:text-red-200 border-neutral-700 hover:bg-neutral-700">Logout</button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SideBar;
