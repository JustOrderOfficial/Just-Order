import React, { useState } from "react";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { orange } from "@mui/material/colors";

// import Checkout from "../pages/Category/Checkout";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 sticky top-4 z-50 text-white flex items-center justify-between px-6 py-4 rounded-2xl mx-6">
      {/* Left Section: Logo */}
      <div className="bg-gradient-to-r from-orange-500 to-white text-transparent bg-clip-text text-xl italic font-bold cursor-pointer">
        Just Order
      </div>

      {/* Center Section: Links */}
      <div className="hidden md:flex gap-6 space-x-10 font-medium">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/aboutUs/AboutUs" },
          { name: "Collection", path: "/Category/ProductGrid" },
          { name: "Support", path: "/support/Support" },
        ].map((link) => (
          <Link
            key={link.name}
            to={link.path} // Use the path from the object
            className="hover:text-orange-500 cursor-pointer transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right Section: Search, Icons, and Sign-in */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white px-2 py-1 rounded-full">
          <SearchIcon className="text-black mr-2" />
          <InputBase
            placeholder="Search"
            className="text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-4">
          <div className="text-black rounded-3xl bg-white py-2 px-2 hover:bg-orange-500 transition ">
            <FavoriteBorderIcon />
          </div>
          <Link to="/Category/Checkout">
            <div className="text-black rounded-3xl bg-white py-2 px-2 hover:bg-orange-500 transition cursor-pointer">
              <ShoppingCartOutlinedIcon />
            </div>
            
          </Link>
          <Link to="/login/SignIn">
            {/* <div className="text-black rounded-3xl bg-white py-2 px-2 hover:bg-orange-500 transition cursor-pointer"> */}
              <PersonIcon className="text-large hover:bg-white transition cursor-pointer rounded-3xl text-orange-500"
              style={{
                fontSize:42,
              }} />
            
          </Link>
        </div>

        {/* Sign-in Button */}
        
        {/* <div className="">
          <IconButton
            component={Link}
            to="/login/SignIn"
            sx={{
              color: "#ff5722",
              // Icon color
              "&:hover": { color: "#e64a19" }, // Hover effect
            }}
            style={{
              fontSize:50
            }}
          >
            <AccountCircle sx={{ }} />
          </IconButton>
        </div> */}
        {/* Search Bar for Mobile */}
        {/* <div className="flex items-center bg-white px-2 py-1 rounded-full">
            <SearchIcon className="text-black mr-2" />
            <InputBase
              placeholder="Search"
              className="text-white placeholder-gray-400 focus:outline-none"
            />
          </div> */}
        {/* Icons for Mobile */}
        {/* <div className="flex gap-4"> */}
        {/* <div className="text-black rounded-3xl bg-white py-2 px-2 hover:bg-orange-500 transition ">
              <FavoriteBorderIcon />
            </div>
            <Link to="/Category/Checkout">
              <div className="text-black rounded-3xl bg-white py-2 px-2 hover:bg-orange-500 transition cursor-pointer">
                <ShoppingCartOutlinedIcon />
              </div>
            </Link>
          </div> */}

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFFFFF2E] text-white rounded-b-lg p-4 flex flex-col gap-4 md:hidden">
          {["Home", "About", "Collection", "Support"].map((link) => (
            <span
              key={link}
              className="hover:text-orange-500 cursor-pointer transition-colors"
            >
              {link}
            </span>
          ))}
          {/* Search Bar for Mobile */}
          {/* <div className="flex items-center bg-white px-2 py-1 rounded-full">
            <SearchIcon className="text-black mr-2" />
            <InputBase
              placeholder="Search"
              className="text-white placeholder-gray-400 focus:outline-none"
            />
          </div> */}
          {/* Icons for Mobile */}
          {/* <div className="flex gap-4">
            <div className="text-black rounded-3xl bg-white py-2 px-2 hover:bg-orange-500 transition ">
              <FavoriteBorderIcon />
            </div>
            <Link to="/Category/Checkout">
              <div className="text-black rounded-3xl bg-white py-2 px-2 hover:bg-orange-500 transition cursor-pointer">
                <ShoppingCartOutlinedIcon />
              </div>
            </Link>
          </div> */}
          {/* Sign-in Button for Mobile */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
