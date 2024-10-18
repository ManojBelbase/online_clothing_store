import React from "react";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";
const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between px-2 md:px-20 bg-gradient-to-t from-white to-yellow-50 py-3 md:py-0">
      <div className="left">
        <h2 className="uppercase text-xs md:text-base font-semibold">
          New arrivals only
        </h2>
        <div className="flex flex-col gap-1 items-start mb-6">
          <div className="flex items-center gap-2">
            <p className="text-4xl md:text-6xl font-semibold">new</p>
            <img src={hand_icon} alt="hand_icon" className="w-10 md:w-16" />
          </div>
          <p className="text-4xl md:text-6xl font-semibold">Collections</p>
          <p className="text-4xl md:text-6xl font-semibold">for everyone</p>
        </div>
        <div className="bg-[#ffb929] rounded-full inline-flex items-center justify-center py-2 px-4 gap-2 cursor-pointer">
          <p className="text-white text-xs md:text-base">Latest Collection</p>
          <img src={arrow_icon} alt="arrow" className="" />
        </div>
      </div>
      <div className="right">
        <div className="flex items-center justify-center md:justify-end">
          <img src={hero_image} alt="" className="w-[70%]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
