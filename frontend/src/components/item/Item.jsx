import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="cursor-pointer  border hover:border-[#ffb929] hover:scale-[101%] duration-300 delay-200 overflow-hidden rounded-sm">
      <div className="min-w-64 h-80">
        <Link to={`/product/${item.id}`}>
          <img
            src={item.image}
            alt="image"
            onClick={window.scrollTo(0, 0)}
            className="object-cover w-full h-full"
          />
        </Link>
      </div>
      <div className="p-2">
        <p>{item.name}</p>
        <div className="flex items-center justify-between">
          <span>{"$" + item.new_price}</span>
          <span className="text-gray-400">{"$" + item.old_price}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
