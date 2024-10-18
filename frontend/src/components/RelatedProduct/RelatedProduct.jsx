import React from "react";
import related_product from "../../assets/data";
import Item from "../item/Item";
const RelatedProduct = () => {
  return (
    <div className="px-2 md:px-20 mt-4 md:mt-10">
      <div>
        <h1 className="text-center md:text-2xl font-semibold uppercase relative mb-3 md:mb-8">
          Related Products
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 block w-24 border-b-2 md:border-b-4 border-black"></span>
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 mt-6">
          {related_product.map((item, i) => {
            return <Item key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
