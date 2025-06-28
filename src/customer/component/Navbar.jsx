import React, { useState } from "react";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useEffect, useRef } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const profileRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="bg-[#0f0f0f] border border-[#2e2e2e] sticky top-4 z-50 text-white flex items-center justify-between px-6 py-4 rounded-2xl mx-6 shadow-lg">
      <Toaster />
      <div className="text-2xl italic font-extrabold text-orange-400 cursor-pointer tracking-wider">
        Just Order
      </div>

      <div className="hidden md:flex gap-8 font-medium text-sm tracking-wide">
        {["Home", "About", "Collection", "Support"].map((name, i) => (
          <Link
            key={name}
            to={
              name === "Home"
                ? "/"
                : name === "About"
                ? "/aboutUs/AboutUs"
                : name === "Collection"
                ? "/Category/ProductGrid"
                : "/support/Support"
            }
            className="hover:text-orange-400 transition-all duration-200"
          >
            {name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-[#1c1c1e] px-3 py-1 rounded-full border border-[#3e3e3e]">
          <SearchIcon className="text-orange-400 mr-2" />
          <InputBase
            placeholder="Search"
            className="text-white placeholder-gray-400 focus:outline-none text-sm"
          />
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <Link to="/favorites">
            <div className="rounded-full p-2 bg-[#1c1c1e] hover:bg-orange-400 hover:text-black transition cursor-pointer">
              <FavoriteBorderIcon />
            </div>
          </Link>

          <Link to="/cart">
            <div className="rounded-full p-2 bg-[#1c1c1e] hover:bg-orange-400 hover:text-black transition cursor-pointer">
              <ShoppingCartOutlinedIcon />
            </div>
          </Link>

          <div className="relative" ref={profileRef}>
            {userLoggedIn ? (
              <div
                onClick={() => setProfileOpen(!profileOpen)}
                className="rounded-full p-2 bg-[#1c1c1e] hover:bg-orange-400 hover:text-black transition cursor-pointer"
              >
                <PersonIcon
                  style={{ fontSize: 32 }}
                  className="text-orange-400"
                />
              </div>
            ) : (
              <Link
                to="/login/SignIn"
                className="text-sm font-semibold bg-orange-500 text-black px-4 py-2 rounded-full hover:bg-orange-400 transition"
              >
                Login
              </Link>
            )}

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50 text-sm">
                {[{ label: "User Profile", path: "/profile" }].map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block px-4 py-2 hover:bg-orange-100"
                    onClick={() => setProfileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div
                  onClick={() => {
                    setUserLoggedIn(false);
                    toast.error("You have been logged out");
                    setProfileOpen(false);
                  }}
                  className="block px-4 py-2 text-red-500 hover:bg-orange-100 cursor-pointer"
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0f0f0f] text-white rounded-b-2xl px-6 py-4 flex flex-col gap-4 md:hidden">
          {["Home", "About", "Collection", "Support"].map((name) => (
            <Link
              key={name}
              to={
                name === "Home"
                  ? "/"
                  : name === "About"
                  ? "/aboutUs/AboutUs"
                  : name === "Collection"
                  ? "/Category/ProductGrid"
                  : "/support/Support"
              }
              className="hover:text-orange-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}

          <div className="flex items-center bg-[#1c1c1e] px-3 py-1 rounded-full border border-[#3e3e3e] mt-2">
            <SearchIcon className="text-orange-400 mr-2" />
            <InputBase
              placeholder="Search"
              className="text-white placeholder-gray-400 focus:outline-none text-sm"
            />
          </div>

          <div className="flex gap-4 mt-3">
            <Link to="/cart">
              <FavoriteBorderIcon className="text-orange-400 hover:text-white cursor-pointer" />
            </Link>

            {/* <Link to="/Category/Checkout">
              <ShoppingCartOutlinedIcon className="text-orange-400 hover:text-white cursor-pointer" />
            </Link> */}
            <Link to="/cart">
              <ShoppingCartOutlinedIcon className="text-orange-400 hover:text-white cursor-pointer" />
            </Link>
            <Link to="/profile">
              <PersonIcon className="text-orange-400 hover:text-white cursor-pointer" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
