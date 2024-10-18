import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);
  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white py-16 px-2 mx-3 md:px-10 shadow-sm flex flex-col gap-3">
          <h1 className="font-medium text-xl">
            {isSignup ? "Login" : "SignUP"}
          </h1>
          {!isSignup ? (
            <div className="border py-3 px-2">
              <input
                type="text"
                placeholder="Your name"
                className="w-96 outline-none h-full"
              />
            </div>
          ) : (
            ""
          )}
          <div className="border py-3 px-2">
            <input
              type="text"
              placeholder="Email address"
              className="md:w-96 outline-none h-full"
            />
          </div>
          <div className="border py-3 px-2">
            <input
              type="text"
              placeholder="Password"
              className="md:w-96 outline-none h-full"
            />
          </div>
          <div className="py-3 text-white px-2 bg-[#ffb929] flex items-center justify-center">
            <button type="submit" className="md:w-80 ">
              Continue
            </button>
          </div>
          <span className="text-xm text-gray-600">
            {isSignup ? " Create an account ?" : "Already have an account ?"}
            <Link
              className="text-[#ffb929]"
              onClick={(prev) => setIsSignup(!prev)}
            >
              Click Here
            </Link>
          </span>
          <div className="py-2">
            <input type="checkbox" /> &nbsp;
            <span className="text-gray-600 text-sm">
              By Continuing, i agree to the terms of use & privacy policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
