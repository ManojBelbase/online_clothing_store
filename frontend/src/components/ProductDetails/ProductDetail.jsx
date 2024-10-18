import React, { useContext } from "react";
import star_icon from "../../assets/star_icon.png";
import star_dull from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../context/shopContext";
const ProductDetail = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="px-2 md:px-20">
      <div className="s-[100%] flex items-start justify-start md:flex-row flex-col gap-4 md:gap-6">
        {/* left part product image */}
        <div className="md:w-[50%] left flex gap-2 md:gap-4">
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="h-20 w-16 md:w-24 md:h-28">
              <img
                src={product.image}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="h-20 w-16 md:w-24 md:h-28">
              <img
                src={product.image}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="h-20 w-16 md:w-24 md:h-28">
              <img
                src={product.image}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="h-20 w-16 md:w-24 md:h-28">
              <img
                src={product.image}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="md:w-[26rem]">
            <div className="h-[22rem] md:h-[485px] w-full border">
              <img
                src={product.image}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
        {/* Right side product description */}
        <div className="md:w-[50%] right flex items-start gap-4 flex-col">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium ">
            {product.name}
          </h1>
          {/* rating */}
          <div className="star flex">
            <img src={star_icon} alt="" className="w-4 h-4" />
            <img src={star_icon} alt="" className="w-4 h-4" />
            <img src={star_icon} alt="" className="w-4 h-4" />
            <img src={star_icon} alt="" className="w-4 h-4" />
            <img src={star_dull} alt="" className="w-4 h-4" />
            <p className="text-sm"> (122)</p>
          </div>
          {/* price */}
          <div className="gap-4 flex">
            <p className="text-gray-500 line-through font-medium">
              ${product.old_price}
            </p>
            <p className="text-[#ffb929] font-medium"> ${product.new_price}</p>
          </div>
          {/* details */}
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            nesciunt, atque itaque, ipsa quisquam iure laudantium velit, quas
          </p>
          {/* size selection */}
          <div>
            <h2 className="font-medium text-gray-500 text-base mb-4">
              Select Size
            </h2>
            <div className="flex gap-4 uppercase">
              <p className="px-4 py-2 bg-gray-50 border rounded-sm cursor-pointer">
                s
              </p>
              <p className="px-4 py-2 bg-gray-50 border rounded-sm cursor-pointer">
                m
              </p>
              <p className="px-4 py-2 bg-gray-50 border rounded-sm cursor-pointer">
                l
              </p>
              <p className="px-4 py-2 bg-gray-50 border rounded-sm cursor-pointer">
                xl
              </p>
              <p className="px-4 py-2 bg-gray-50 border rounded-sm cursor-pointer">
                xxl
              </p>
            </div>
          </div>
          {/* add to cart */}
          <div className="bg-[#ffb929] px-6 py-2 rounded-sm">
            <button
              className="text-white"
              onClick={() => {
                addToCart(product.id);
              }}
            >
              Add to cart
            </button>
          </div>
          {/*  */}
          <div>
            <p className="font-medium">
              Category:{" "}
              <span className="font-normal capitalize">{product.category}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
