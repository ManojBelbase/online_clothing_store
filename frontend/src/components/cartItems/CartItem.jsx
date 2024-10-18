import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const CartItem = () => {
  const { all_products, cartItems, removeFromCart } = useContext(ShopContext);

  // Calculate the subtotal (sum of all items in the cart)
  const calculateSubtotal = () => {
    let subtotal = 0;
    all_products.forEach((product) => {
      const quantity = cartItems[product.id];
      if (quantity > 0) {
        subtotal += product.new_price * quantity;
      }
    });
    return subtotal.toFixed(2); // Return the subtotal with two decimal places
  };

  const shippingFee = 0; // Free shipping in this example, adjust as needed
  const total = (parseFloat(calculateSubtotal()) + shippingFee).toFixed(2); // Calculate total

  return (
    <div className="px-2 md:px-20 mt-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Shopping Cart</h2>

      {/* Table header for desktop */}
      <div className="hidden md:grid md:grid-cols-6 gap-4 bg-gray-100 p-4 font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Horizontal scroll on mobile */}
      <div className="md:hidden overflow-x-auto">
        <div className="min-w-[600px]">
          <div className="grid grid-cols-6 gap-4 bg-gray-100 p-4 font-semibold">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
        </div>
      </div>

      {/* Cart items */}
      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          {all_products.length === 0 ? (
            <p className="mt-4">Your cart is empty.</p>
          ) : (
            all_products.map((product) => {
              const quantity = cartItems[product.id];
              if (quantity > 0) {
                const totalPrice = product.new_price * quantity;

                return (
                  <div
                    key={product.id}
                    className="grid grid-cols-6 gap-4 items-center p-4 border-b text-sm md:text-base"
                  >
                    {/* Product Image */}
                    <div className="h-20 w-20">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Product Title */}
                    <p>{product.name}</p>

                    {/* Product Price */}
                    <p>${product.new_price.toFixed(2)}</p>

                    {/* Product Quantity */}
                    <p>{quantity}</p>

                    {/* Total Price */}
                    <p>${totalPrice.toFixed(2)}</p>

                    {/* Remove from Cart */}
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                );
              }
              return null;
            })
          )}
        </div>
      </div>

      {/* Cart Totals */}
      <div className="md:mt-10 mt-2 flex items-start gap-10 md:flex-row flex-col-reverse">
        <div className="left w-full md:w-[50%]">
          <h1 className="text-lg font-medium">Cart Totals</h1>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex items-center justify-between border-b-2">
              <p>Subtotal</p>
              <span>${calculateSubtotal()}</span> {/* Display subtotal */}
            </div>
            <div className="flex items-center justify-between border-b-2">
              <p>Shipping fee</p>
              <span>
                {shippingFee === 0 ? "Free" : `$${shippingFee.toFixed(2)}`}
              </span>{" "}
              {/* Shipping fee */}
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">Total</p>
              <span className="font-medium">${total}</span>{" "}
              {/* Display total price */}
            </div>
          </div>
          <button className="py-2 px-6 bg-[#ffb929] mt-5 text-white">
            Proceed to checkout
          </button>
        </div>
        {/* promocode */}
        <div className="promo">
          <p className="py-2">If you have an promocode, Enter it here</p>
          <div className="bg-gray-200 flex justify-between rounded-sm">
            <input type="text" className="bg-transparent outline-none px-3" />
            <button className="bg-black text-white py-2 px-4 rounded-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
