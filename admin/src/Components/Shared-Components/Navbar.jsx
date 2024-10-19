import React, { useState } from "react";
import kapadaa from "../../assets/kapadaa.png";
import admin from "../../assets/manoj.png";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <div className="md:px-10 px-2 h-14 shadow-md flex items-center justify-between">
      <div className="h-10 w-24 relative">
        <img src={kapadaa} alt="" className="h-full w-full" />
        <p className="absolute -top-[5px] right-4 border border-black rounded-md px-1 py-0 text-xs">
          Admin
        </p>
      </div>
      <div>
        <div className="relative">
          <div className="h-10 w-10">
            <img
              src={admin}
              alt=""
              className="w-full h-full rounded-full cursor-pointer border-2 border-[#ffb929]"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            />
          </div>
          <div
            className={`${
              isProfileOpen
                ? "absolute right-4 top-11 border  px-2  py-2 bg-gray-50"
                : "hidden"
            }`}
          >
            <p className="flex items-center px-2 py-1 cursor-pointer border border-black gap-2 mb-2 text-sm hover:border-[#ffb929] hover:text-[#ffb929]">
              <CgProfile />
              <span>Manoj </span>
            </p>
            <p className="flex px-2 border py-1 border-black gap-2 cursor-pointer items-center hover:border-red-500 hover:text-red-500">
              <TbLogout />
              <button className="outline-none text-sm">logout</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
