import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
// import GoogleIcon from '@mui/icons-material/Google';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const backgroundImage = 'url(/assets/images/signIn.png)';
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage }}>
      <div className="h-full w-full p-6 rounded-3xl max-w-md bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        {/* Header */}
        <div className='flex'>
          <h1 className="text-3xl font-bold text-white text-left mr-2">Hi, </h1>
          <h1 className="text-3xl font-bold text-center text-orange-500 mb-4 ">  Welcome back!</h1>
        </div>
        <p className="text-white mb-4 text-left">Login now to your account</p>

        {/* Social Login */}
        <div className="space-y-4">
          <button className="flex items-center justify-center w-full  bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white py-2 rounded-lg hover:bg-orange-500">
            <img
              src="/assets/images/google.png"
              alt="Google Logo"
              className="h-7 w-7 mr-2"
            /> Sign in with Google
          </button>
        </div>

        {/* Separator */}
        <div className="flex items-center my-2">
          <hr className="flex-grow border-gray-700" />
          <span className="text-gray-400 px-2">or</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        {/* Form */}
        <form className="space-y-3">
          <div className='space-y-2'>
            <p className='text-lg  text-white text-left'>Email address</p>
            <div className="relative">
              <MailOutlineOutlinedIcon className="absolute left-3 top-2 text-gray-400" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full pl-10 pr-3 py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white rounded-lg focus:outline "
              />
            </div>
          </div>
          <div className='space-y-2'>
            <p className='text-lg  text-white text-left'>Password</p>
            <div className="relative">
              <LockOutlinedIcon className="absolute left-3 top-2 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-3 py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white rounded-lg focus:outline "
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-gray-400 hover:text-orange-500 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-100">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="hover:text-orange-500">Forgot Password?</Link>
          </div>

          <button
            type="submit"
            className="w-full hover:bg-orange-500 border-2bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white py-2 rounded-lg font-bold"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-100 mt-4">
          Not registered yet? <Link to="/login/SignUp" className="text-orange-500 hover:underline">Create an Account</Link>
        </p>

        <footer className="text-center text-xs text-gray-100 mt-4">
          © 2024 JustOrder. All rights reserved. <Link to="/terms" className="hover:underline">Terms of Service</Link> • <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        </footer>
      </div>
    </div>
  );
};

export default SignIn;
