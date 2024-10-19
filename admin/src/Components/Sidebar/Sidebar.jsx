import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegListAlt } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="px-2 py-4 flex flex-row  md:flex-col gap-4 md:h-screen">
      <div
        className={`px-2 py-2 border border-black flex items-center gap-2 rounded-sm ${
          location.pathname === "/add-product" ? "border-b-[#ffb929]" : ""
        }`}
      >
        <MdAddCircleOutline className="text-xl" />
        <Link to={"/add-product"}>Add Product</Link>
      </div>
      <div
        className={`px-2 py-2 border flex border-black items-center gap-2 rounded-sm ${
          location.pathname === "/product-lists"
            ? "border-b-[#ffb929] delay-100"
            : ""
        }`}
      >
        <FaRegListAlt />
        <Link to={"/product-lists"}> Product List</Link>
      </div>
    </div>
  );
};

export default Sidebar;
