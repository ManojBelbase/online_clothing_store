import React, { useEffect, useState } from "react";

import { RxCross2 } from "react-icons/rx";
const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchData = async () => {
    await fetch("http://localhost:4000/api/all-products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data?.data || [])) // Access the 'data' property safely
      .catch((err) => console.error("Error fetching products:", err));
  };

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/api/remove-product", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-2">
      <h1 className="text-lg font-medium mb-1 md:mb-4">All Product List</h1>

      {/* Scrollable container for both header and data */}
      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          {/* Header */}
          <div className="grid grid-cols-6 gap-4 bg-gray-100 p-4 font-semibold">
            <p>Products</p>
            <p>Title</p>
            <p>Old Price</p>
            <p>New Price</p>
            <p>Category</p>
            <p>Remove</p>
          </div>

          {/* Product List */}
          <div className="">
            {allProducts.length > 0 ? (
              allProducts.map((product, i) => {
                return (
                  <div key={i} className="grid grid-cols-6 gap-4 p-4 border-b">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 object-contain"
                    />
                    <p className="text-black">{product.name}</p>
                    <p>{product.old_price}</p>
                    <p>{product.new_price}</p>
                    <p>{product.category}</p>
                    <p
                      onClick={() => removeProduct(product.id)}
                      className="text-red-500 cursor-pointer"
                    >
                      <RxCross2 className="text-2xl" />
                    </p>
                  </div>
                );
              })
            ) : (
              <p>No products available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
