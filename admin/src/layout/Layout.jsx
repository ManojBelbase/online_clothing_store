import React from "react";
import Navbar from "../Components/Shared-Components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[100%] md:flex items-start">
        <div className="md:w-[15%] border-r mr-2">
          <Sidebar />
        </div>
        <div className="md:w-[80%] w-full mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
