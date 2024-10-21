import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger and close icons
import logo from "../../assets/kapadaa.png";
import { ShopContext } from "../../context/shopContext";

const navItems = [
  {
    title: "shop",
    path: "/",
  },
  {
    title: "mens",
    path: "/mens",
  },
  {
    title: "womens",
    path: "/womens",
  },
  {
    title: "kids",
    path: "/kids",
  },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <>
      <div className="flex items-center justify-between border-b shadow-sm h-14 px-2 md:px-20">
        {/* Logo */}
        <Link to="/" className="h-10 w-24">
          <img
            src={logo}
            alt="logo"
            className="h-full w-full object-cover cursor-pointer"
          />
        </Link>

        {/* Hamburger Menu for Mobile View */}
        <div className="md:hidden">
          {isSidebarOpen ? (
            <FiX className="text-2xl cursor-pointer" onClick={toggleSidebar} />
          ) : (
            <FiMenu
              className="text-2xl cursor-pointer"
              onClick={toggleSidebar}
            />
          )}
        </div>

        {/* Navigation Links (Hidden on mobile view) */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item, i) => (
            <li key={i} className="text-sm uppercase font-normal">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[#ffb929]"
                    : "hover:text-[#ffb929]"
                }
                to={item.path}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Cart / Login (Hidden on mobile view) */}
        <div className="hidden md:flex items-center gap-6">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
              className="px-5 py-2 border border-black hover:border-red-500 text-sm uppercase font-normal rounded-full hover:text-red-500"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-5 py-2 border border-black hover:border-[#ffb929] text-sm uppercase font-normal rounded-full hover:text-[#ffb929]"
            >
              Login
            </Link>
          )}

          {/* Cart */}
          <Link to="/cart" className="relative">
            <PiShoppingCart className="text-3xl font-semibold cursor-pointer" />
            <span className="absolute -top-2 -right-2 h-5 w-5 text-xs font-medium bg-[#ffb929] text-white rounded-full flex items-center justify-center">
              {getTotalCartItems()}
            </span>
          </Link>
        </div>
      </div>

      {/* Sidebar for mobile view */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50`}
      >
        <ul className="flex flex-col p-4">
          {navItems.map((item, i) => (
            <li key={i} className="text-lg uppercase font-normal my-4">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[#ffb929]"
                    : "hover:text-[#ffb929]"
                }
                to={item.path}
                onClick={() => setIsSidebarOpen(false)} // Close sidebar when a link is clicked
              >
                {item.title}
              </NavLink>
            </li>
          ))}
          <Link
            to="/login"
            className="px-5 py-2 border border-black hover:border-[#ffb929] text-sm uppercase font-normal rounded-full hover:text-[#ffb929] mt-6"
            onClick={() => setIsSidebarOpen(false)}
          >
            Login
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
