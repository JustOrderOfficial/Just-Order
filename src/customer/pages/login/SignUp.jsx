import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import API_BASE_URL from '../../../config'; // adjust path based on your folder structure

// Icons for inputs
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FlagIcon from '@mui/icons-material/Flag';

const SignUp = () => {
  const backgroundImage ='url(/assets/images/signIn.png)';
  // For programmatic navigation after signup
  const navigate = useNavigate();

  // React state to hold form input values
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    role: 'USER' // Default role
  });

  // Handle input changes and update form data state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
  // Basic client-side validation: Check if passwords match
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  const nameParts = formData.full_name.trim().split(" ");
  const first_name = nameParts[0];
  const last_name = nameParts.slice(1).join(" ") || '-';

  const payload = {
    email: formData.email,
    mobile: formData.mobile,
    password: formData.password,
    role: formData.role,
    first_name,
    last_name
  };

  try {
    const res = await axios.post(`${API_BASE_URL}/api/auth/register`, payload, {
      withCredentials: true
    });
    alert("Registered successfully!");
    navigate('/login/SignIn');
    }catch (err) {
      if (err.response?.status === 409) {
        alert("Email already exists");
      } else {
        alert("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover"
    style={{backgroundImage}}
    >
     <div className="h-full w-full p-8 rounded-3xl max-w-md bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        {/* Header */}
        <h1 className="text-3xl font-bold text-orange-500 mb-3 text-left">Sign Up</h1>
        <p className="text-gray-200 text-left mb-4">Already have an account? <Link to="/login/SignIn" className="text-orange-500 hover:underline">Log in</Link></p>

        {/* Form */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="relative">
            <PermIdentityOutlinedIcon className="absolute left-3 top-2 text-gray-400" />
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
              required
             className="w-full pl-10 pr-3 py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white rounded-lg focus:outline "
            />
          </div>

          <div className="relative">
            <MailOutlineOutlinedIcon className="absolute left-3 top-2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white rounded-lg focus:outline "
            />
          </div>

          <div className="relative">
            <FlagIcon className="absolute left-3 top-2 text-gray-400" />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
             className="w-full pl-10 pr-3 py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white rounded-lg focus:outline "
            />
          </div>

          <div className="relative">
            <LockOutlinedIcon className="absolute left-3 top-2 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white rounded-lg focus:outline "
            />
          </div>

          <div className="relative">
            <LockOutlinedIcon className="absolute left-3 top-2 text-gray-400" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
             className="w-full pl-10 pr-3 py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white rounded-lg focus:outline "
            />
          </div>

          <button
            type="submit"
            aria-label="Sign Up"
            title="Sign Up to your account"
            className="w-full hover:bg-orange-500 border-2bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white py-2 rounded-lg font-bold"
          >
            Sign Up
          </button>
        </form>

        {/* Terms & Conditions */}
        <p className="text-sm text-gray-200 mt-4 text-center">
          By joining, I agree to receive emails from JustOrder.
        </p>
        
        {/* Footer */}
        <footer className="text-center text-xs text-gray-200 mt-4">
          © 2024 JustOrder. All rights reserved. <Link to="/terms" className="hover:underline">Terms of Service</Link> • <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        </footer>
      </div>
    </div>
  );
};

export default SignUp;