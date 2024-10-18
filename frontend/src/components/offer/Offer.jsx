import React from "react";
import exclusiveImage from "../../assets/exclusive_image.png";
const Offer = () => {
  return (
    <div className="mx-2 md:mx-20 bg-gradient-to-t from-white to-yellow-50 flex md:flex-row flex-col items-center justify-between px-4 md:px-20 py-10">
      <div className="left flex flex-col md:items-start gap-3">
        <p className="text-4xl md:text-5xl font-medium">Exclusive</p>
        <p className="text-4xl md:text-5xl font-medium">Offers For You</p>
        <span className="uppercase text-xs md:text-sm">
          Only on the best selling products
        </span>
        <div className="bg-[#ffb929] rounded-full inline-flex items-center justify-center px-3 py-2 md:px-8 gap-2 cursor-pointer">
          <p className="text-white text-xs md:text-base">Check Now</p>
        </div>
      </div>
      <div className="right">
        <div className="h-64">
          <img src={exclusiveImage} alt="" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
