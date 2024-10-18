import React from "react";

const Subscription = () => {
  return (
    <div className="mx-2 md:mx-20 bg-gradient-to-t from-white to-yellow-50 px-4 md:px-20 py-10">
      <div className="left flex flex-col md:items-center gap-4">
        <p className=" text-3xl md:text-4xl font-medium">
          Get Exclusive Offers On Your Email
        </p>
        <span className="text-sm text-gray-700">
          Subscribe to our newsletter and stay updated
        </span>
        <div className="border flex border-black rounded-full">
          <input
            type="text"
            placeholder="Your email id"
            className="border-0 outline-none mx-4 w-60 font-light"
          />
          <button className="border-none h-full rounded-full font-light text-xm outline-none  bg-black text-white px-4 py-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
