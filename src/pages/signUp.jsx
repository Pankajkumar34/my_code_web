import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { girlPng, loginBanner } from "../ImageImport/imageImport";
import { motion } from "framer-motion"
import { FaArrowCircleRight } from "react-icons/fa";
const Signup = () => {
  const router = useNavigate();

  const handleclick = () => {
    // router("/");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${loginBanner})`,
          filter: "blur(1px)",
          zIndex: -1,
        }}
      >

      </div>

      <div className="absolute inset-0 bg-black opacity-40 flex"></div>
      <Link to="/" className="pr-[80px] pt-3 float-right text-white relative z-[1] text-[30px]"><FaArrowCircleRight/></Link>

      <div className="relative z-10 flex items-center justify-around h-full w-full px-4 sm:px-6 md:px-8">
        <motion.div initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring" }}>
          <img src={girlPng} alt="" />
        </motion.div>
        <motion.div initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ type: "spring" }} className="backdrop-blur-sm rounded-lg shadow-lg border overflow-hidden max-w-md w-full p-6 md:p-8">
          <p className="text-2xl text-white text-center mb-6">Welcome back!</p>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Name
            </label>
            <input
              className="text-white border border-gray-300 rounded py-3 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="text"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              className="text-white border border-gray-300 rounded py-3 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-semibold mb-2">
              Password
            </label>
            <input
              className="text-white border border-gray-300 rounded py-3 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="password"
            />
            <label className="block text-white text-sm font-semibold mb-2">
              Confirm Password
            </label>
            <input
              className="text-white border border-gray-300 rounded py-3 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="password"
            />
          </div>
          <button
            className="bg-blue-600 text-white font-semibold py-3 px-4 w-full rounded hover:bg-blue-500 transition-colors duration-300"
            onClick={handleclick}
          >
            Sign Up
          </button>
          <a
            href="#"
            className="flex items-center justify-center mt-6 over:!text-black rounded-lg shadow-md   hover:bg-gray-200 transition-colors duration-300"
          ></a>
          <div className="mt-6 text-center text-white">
            <Link
              to="/login"
              className="text-sm capitalize text-blue-600 hover:underline"
            >
              Don&apos;t have an account yet?{" "}
              <span className="font-semibold">Sign in</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Signup;
