import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { girlPng, loginBanner } from "../ImageImport/imageImport";
import { motion } from "framer-motion";
import OnChangeInput from "onchangeinput";
import { getEmptyFields } from "get_input_empty_fields";
const Login = () => {
  const router = useNavigate();
  const { values, handleChange, errors, setErrors, resetForm } = OnChangeInput({
    email: "",
    password: "",
  });

  const handleclick = () => {
    router("/");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${loginBanner})`,
          filter: "blur(1px)", // Adjust the blur intensity
          zIndex: -1,
        }}
      ></div>
      {/* Overlay for color and opacity */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-around h-full w-full px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ type: "spring" }}
        >
          <img src={girlPng} alt="" />
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ type: "spring" }}
          className="backdrop-blur-sm rounded-lg shadow-lg border overflow-hidden max-w-md w-full p-6 md:p-8"
        >
          <p className="text-2xl text-white text-center mb-6">Welcome back!</p>

          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
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
              name="password"
              value={values.password}
              onChange={handleChange}
              className="text-white border border-gray-300 rounded py-3 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="password"
            />
          </div>
          <button
            className="bg-blue-600 text-white font-semibold py-3 px-4 w-full rounded hover:bg-blue-500 transition-colors duration-300"
            onClick={handleclick}
          >
            Log In
          </button>
          <a
            href="#"
            className="flex items-center justify-center mt-6 over:!text-black rounded-lg shadow-md   hover:bg-gray-200 transition-colors duration-300"
          ></a>
          <div className="mt-6 text-center text-white">
            <Link
              to="/signup" // Update this to the route for signing up
              className="text-sm capitalize text-blue-600 hover:underline"
            >
              Don&apos;t have an account yet?{" "}
              <span className="font-semibold">Sign up</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
