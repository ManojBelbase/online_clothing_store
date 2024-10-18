import React from "react";
import arrow from "../../assets/breadcrum_arrow.png";

const BreadCrum = ({ product }) => {
  // Check if product exists to avoid errors
  if (!product || !product.category) {
    return <div>Loading...</div>; // Or handle accordingly
  }

  return (
    <div className="px-2 md:px-20 py-5">
      <p className="hidden md:flex items-center gap-1 text-sm line-clamp-1 capitalize">
        HOME <img src={arrow} className="h-3" alt="arrow" /> SHOP
        <img src={arrow} className="h-3" alt="arrow" />
        {product.category} <img src={arrow} className="h-3" alt="arrow" />
        <span> {product.name}</span>
      </p>
    </div>
  );
};

export default BreadCrum;
