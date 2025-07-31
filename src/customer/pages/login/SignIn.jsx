import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useGoogleLogin } from "@react-oauth/google";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // 🔹 Normal Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/login`, formData, {
        withCredentials: true,
      });
      const { token, user } = res.data;

      localStorage.setItem("jwt", token);
      alert("✅ Login successful!");
      navigate("/");
    } catch (err) {
      console.error("❌ Login error:", err);
      alert("Invalid credentials");
    }
  };

  // 🔹 Google Login
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const { access_token } = tokenResponse;

        const userInfoRes = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          { headers: { Authorization: `Bearer ${access_token}` } }
        );
        const userInfo = await userInfoRes.json();

        const response = await axios.post(`${API_BASE_URL}/api/auth/google`, {
          token: access_token,
          user: userInfo,
        });

        const { token, user } = response.data;
        localStorage.setItem("jwt", token);
        alert("✅ Google login successful!");
        navigate("/");
      } catch (err) {
        console.error("❌ Google login error:", err);
        alert("Google login failed!");
      }
    },
    onError: () => alert("Google login failed!"),
  });

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0f0f0f] px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-[#1a1a1a] p-6 sm:p-8 rounded-2xl shadow-lg border border-[#2a2a2a]"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-white">
          Sign In
        </h1>
        <p className="text-gray-400 text-center text-xs sm:text-sm mt-2 mb-6">
          Welcome back! Please log in to your account.
        </p>

        {/* Google Sign-In */}
        <button
          type="button"
          onClick={googleLogin}
          className="w-full flex items-center justify-center gap-3 bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white py-2.5 sm:py-3 rounded-lg mb-5 transition text-sm sm:text-base"
        >
          <img
            src="/assets/images/google.png"
            className="h-4 w-4 sm:h-5 sm:w-5"
            alt="Google"
          />
          Continue with Google
        </button>

        <div className="flex items-center mb-5">
          <hr className="flex-grow border-gray-600" />
          <span className="px-3 text-gray-400 text-xs sm:text-sm">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block mb-1 text-xs sm:text-sm text-gray-300">
              Email
            </label>
            <div className="flex items-center border border-gray-600 rounded-lg bg-[#101010]">
              <MailOutlineOutlinedIcon className="mx-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full py-2.5 sm:py-3 pr-4 bg-transparent outline-none text-gray-100"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-xs sm:text-sm text-gray-300">
              Password
            </label>
            <div className="flex items-center border border-gray-600 rounded-lg bg-[#101010] relative">
              <LockOutlinedIcon className="mx-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full py-2.5 sm:py-3 pr-10 bg-transparent outline-none text-gray-100"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-400 hover:text-gray-200"
              >
                {showPassword ? (
                  <VisibilityOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me + Forgot */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-sm text-gray-400">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="accent-orange-500" /> Remember
              me
            </label>
            <Link to="/forgot-password" className="hover:text-orange-400">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition text-sm sm:text-base"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-xs sm:text-sm mt-6 text-gray-400">
          Don’t have an account?{" "}
          <Link to="/login/SignUp" className="text-orange-400 hover:underline">
            Sign Up
          </Link>
        </p>

        <footer className="text-[10px] sm:text-xs text-center mt-6 text-gray-500">
          © 2025 JustOrder.{" "}
          <Link to="/terms" className="hover:underline">
            Terms
          </Link>{" "}
          •{" "}
          <Link to="/privacy" className="hover:underline">
            Privacy
          </Link>
        </footer>
      </motion.div>
    </div>
  );
};

export default SignIn;
