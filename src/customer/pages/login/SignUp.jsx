import React from 'react';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FlagIcon from '@mui/icons-material/Flag';

const SignUp = () => {
  const backgroundImage ='url(/assets/images/signIn.png)';
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover"
    style={{backgroundImage}}
    >
     <div className="h-full w-full p-8 rounded-3xl max-w-md bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        {/* Header */}
        <h1 className="text-3xl font-bold text-orange-500 mb-3 text-left">Sign Up</h1>
        <p className="text-gray-200 text-left mb-4">Already have an account? <Link to="/login/SignIn" className="text-orange-500 hover:underline">Log in</Link></p>

        {/* Form */}
        <form className="space-y-3">
          <div className="relative">
            <PermIdentityOutlinedIcon className="absolute left-3 top-2 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
             className="w-full pl-10 pr-3 py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white rounded-lg focus:outline "
            />
          </div>

          <div className="relative">
            <MailOutlineOutlinedIcon className="absolute left-3 top-2 text-gray-400" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-3 py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white rounded-lg focus:outline "
            />
          </div>

          <div className="relative">
            <FlagIcon className="absolute left-3 top-2 text-gray-400" />
            <input
              type="tel"
              placeholder="+91"
             className="w-full pl-10 pr-3 py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white rounded-lg focus:outline "
            />
          </div>

          <div className="relative">
            <LockOutlinedIcon className="absolute left-3 top-2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-3 py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white rounded-lg focus:outline "
            />
          </div>

          <div className="relative">
            <LockOutlinedIcon className="absolute left-3 top-2 text-gray-400" />
            <input
              type="password"
              placeholder="Confirm Password"
             className="w-full pl-10 pr-3 py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white rounded-lg focus:outline "
            />
          </div>

          <button
            type="submit"
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