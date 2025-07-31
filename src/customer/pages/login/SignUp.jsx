import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API_BASE_URL = import.meta.env.API_BASE_URL;
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FlagIcon from "@mui/icons-material/Flag";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    role: "USER",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const nameParts = formData.full_name.trim().split(" ");
    const payload = {
      email: formData.email,
      mobile: formData.mobile,
      password: formData.password,
      role: formData.role,
      first_name: nameParts[0],
      last_name: nameParts.slice(1).join(" ") || "-",
    };

    try {
      await axios.post(`${API_BASE_URL}/api/auth/register`, payload, {
        withCredentials: true,
      });
      alert("Registered successfully!");
      navigate("/login/SignIn");
    } catch (err) {
      alert(
        err.response?.status === 409
          ? "Email already exists"
          : "Registration failed. Try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0f0f0f] px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-[#1a1a1a] p-6 sm:p-8 rounded-2xl shadow-lg border border-[#2a2a2a]">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-white">
          Sign Up
        </h1>
        <p className="text-gray-400 text-center text-xs sm:text-sm mt-2 mb-6">
          Already have an account?{" "}
          <Link to="/login/SignIn" className="text-orange-400 hover:underline">
            Sign In
          </Link>
        </p>

        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="flex items-center border border-gray-600 rounded-lg bg-[#101010]">
            <PermIdentityOutlinedIcon className="mx-3 text-gray-400" />
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full py-2.5 sm:py-3 bg-transparent outline-none text-gray-100 text-sm sm:text-base"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-600 rounded-lg bg-[#101010]">
            <MailOutlineOutlinedIcon className="mx-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full py-2.5 sm:py-3 bg-transparent outline-none text-gray-100 text-sm sm:text-base"
            />
          </div>

          {/* Mobile */}
          <div className="flex items-center border border-gray-600 rounded-lg bg-[#101010]">
            <FlagIcon className="mx-3 text-gray-400" />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full py-2.5 sm:py-3 bg-transparent outline-none text-gray-100 text-sm sm:text-base"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-600 rounded-lg bg-[#101010]">
            <LockOutlinedIcon className="mx-3 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full py-2.5 sm:py-3 bg-transparent outline-none text-gray-100 text-sm sm:text-base"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center border border-gray-600 rounded-lg bg-[#101010]">
            <LockOutlinedIcon className="mx-3 text-gray-400" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full py-2.5 sm:py-3 bg-transparent outline-none text-gray-100 text-sm sm:text-base"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition text-sm sm:text-base"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-xs sm:text-sm mt-4 text-gray-400">
          By joining, I agree to receive emails from JustOrder.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
