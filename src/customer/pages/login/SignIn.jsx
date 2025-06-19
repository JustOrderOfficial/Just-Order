import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import signin from "/assets/images/Sign.png";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen  w-full flex flex-col lg:flex-row bg-gradient-to-br from-[#f8f4f0] via-[#e9e2ef] to-[#dcd3ec]">
      {/* Left Image Panel */}
      <motion.div
        className="lg:w-1/2 w-full h-64 lg:h-screen"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={signin}
          alt="Sign In"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right Form Panel */}
      <motion.div
        className="lg:w-1/2 w-full flex justify-center items-center px-4 py-8"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 text-gray-700">
          <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back</h1>
          <p className="text-sm text-center text-gray-500 mb-6">
            Login to continue exploring our collections
          </p>

          {/* Google Sign In */}
          <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition duration-200 mb-5 shadow-sm">
            <img
              src="/assets/images/google.png"
              className="h-5 w-5"
              alt="Google"
            />
            Sign in with Google
          </button>

          <div className="flex items-center mb-5">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form className="space-y-5">
            {/* Email Field */}
            <div className="relative">
              <label className="absolute text-base text-gray-500 top-[-10px] left-3 bg-white px-1">
                Email address
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                <MailOutlineOutlinedIcon className="mx-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full py-3 pr-4  outline-none text-gray-700 rounded-r-lg"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="absolute text-base text-gray-500 top-[-10px] left-3 bg-white px-1">
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                <LockOutlinedIcon className="mx-3 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full py-3 pr-10 outline-none text-gray-700 rounded-r-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
              <label className="flex items-center gap-1">
                <input type="checkbox" />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="hover:underline text-gray-500"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-2 rounded-lg transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm mt-6 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/login/SignUp"
              className="text-black font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>

          <footer className="text-xs text-center mt-6 text-gray-400">
            © 2024 JustOrder.{" "}
            <Link to="/terms" className="hover:underline">
              Terms
            </Link>{" "}
            •{" "}
            <Link to="/privacy" className="hover:underline">
              Privacy
            </Link>
          </footer>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;
