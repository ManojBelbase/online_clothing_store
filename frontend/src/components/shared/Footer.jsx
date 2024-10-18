import React from "react";
import logo from "../../assets/kapadaa.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="px-2 md:px-20 py-6 md:mt-10">
      <div className="flex items-center flex-col justify-center gap-6">
        <div className="h-10">
          <img src={logo} alt="" className="h-full" />
        </div>
        <ul className="flex gap-2 md:gap-8">
          <li className="cursor-pointer text-gray-700">Company</li>
          <li className="cursor-pointer text-gray-700">Products</li>
          <li className="cursor-pointer text-gray-700">Offices</li>
          <li className="cursor-pointer text-gray-700">About</li>
          <li className="cursor-pointer text-gray-700">Contact</li>
        </ul>
        <div className="flex gap-4 mb-6">
          <FaSquareFacebook className="cursor-pointer" />
          <FaInstagramSquare className="cursor-pointer" />
          <FaYoutubeSquare className="cursor-pointer" />
          <FaSquarePinterest className="cursor-pointer" />
        </div>
        <div className="border border-gray-300 w-full"></div>
        <span className="text-gray-600 ">
          copyright &#169; 2024 - All Right Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
