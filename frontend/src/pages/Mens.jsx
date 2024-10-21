import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import Item from "../components/item/Item";
const Mens = ({ banner, category }) => {
  const { all_products } = useContext(ShopContext);
  console.log(all_products);

  return (
    <div className="px-2 md:px-20 py-6">
      <div className="flex flex-col gap-4">
        <div>
          <img src={banner} alt="" />
        </div>
        <div className="flex items-center justify-between">
          <p>
            <span className="font-medium">showing 1-12</span> out of 36 products
          </p>
          <select>
            <option value="">sort by</option>
            <option value="">Brand</option>
          </select>
        </div>

        <div className="items grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {all_products.map((item, i) => {
            if (category === item.category) {
              return <Item key={i} item={item} />;
            } else return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Mens;
