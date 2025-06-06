// 'use client'

// import { ArrowForward } from '@mui/icons-material';
// import { Instagram, Twitter, WhatsApp } from '@mui/icons-material';

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white py-12 mt-4">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Newsletter Signup */}
//         <div className="text-left mb-10 justify-evenly">
//           <h2 className="text-xl font-700">Sign Up Now</h2>
//           <div className='flex justify-between'>
//           <div className="mt-4 flex justify-center items-center bg-black border border-white">
//             <input
//               type="email"
//               placeholder="Email"
//               className=" bg-black text-white placeholder-buttons py-2 px-4 outline-none w-64"
//             />
//             <button className="text-white p-2">
//               <ArrowForward  className='h-8 w-8'/>
//             </button>
//           </div>
//              {/* Social Media Icons */}
//              <div className="flex space-x-4 mt-4 md:mt-0 md:ml-6">
//                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//                     <Instagram className="h-10 w-10" />
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//                     <Twitter className="h-10 w-10" />
//                 </a>
//                 <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//                     <WhatsApp className="h-10 w-10" />
//                 </a>
//             </div>

//         </div>

     
       
//         </div>
//         {/* Footer Links */}
//         <div className="border-t border-buttons w-full"></div>
//         <div className=" pt-6 w-full text-center text-sm font-700 text-lg text-white">
         
//           <div className="flex justify-between space-x-8 md:ml-6">
//           <p className="mb-4 text-left">&copy; 2024, Just Order</p>
//             <a href="#privacy" className="hover:text-buttons">Privacy Policy</a>
//             <a href="#contact" className="hover:text-buttons">Contact Information</a>
//             <a href="#refund" className="hover:text-buttons">Refund Policy</a>
//             <a href="#terms" className="hover:text-buttons">Terms Of Service</a>
//             <a href="#shipping" className="hover:text-buttons">Shipping Policy</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { Instagram, Twitter, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 h-80 px-16">
      <div className="flex flex-col lg:flex-row justify-stretch gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Section */}
        <div className="flex flex-col text-left">
          {/* <h1 className="text-4xl font-semibold mr-48 from-red-600 to-white">Just Order</h1> */}
          <h1 className="text-4xl font-semibold  bg-gradient-to-r from-orange-500 to-white text-transparent bg-clip-text">
          Just Order
          </h1>

          <p className="text-gray-400  mt-2">Curating the looks you love</p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-full mr-2 text-black w-56"
            />
            <button className="bg-orange-500 text-white px-4 rounded-full hover:bg-gray-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex justify-around w-full lg:w-1/3 md:ml-6">
          <div className="text-left">
            <h2 className="font-semibold text-lg">Categories</h2>
            <ul className="mt-2 space-y-2 ">
              <li>
                <Link to="/" className="hover:text-orange-500 cursor-pointer transition-colors  text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 cursor-pointer transition-colors  text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-orange-500 cursor-pointer transition-colors  text-gray-300">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-orange-500 cursor-pointer transition-colors  text-gray-300">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h2 className="font-semibold text-lg">Customer Support</h2>
            <ul className="mt-2 space-y-2 ">
              <li>
                <Link
                  to="/complaint-center"
                  className="hover:text-orange-500 cursor-pointer transition-colors  text-gray-300"
                >
                  Complaint Center
                </Link>
              </li>
              <li>
                <Link
                  to="/dealing-partners"
                  className="hover:text-orange-500 cursor-pointer transition-colors  text-gray-300"
                >
                  Dealing Partners
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-orange-500 cursor-pointer transition-colors  text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="hover:text-orange-500 cursor-pointer transition-colors ">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-left">
          <h2 className="font-semibold text-lg">Contact Us</h2>
          <ul className="mt-2 space-y-2 ">
            <li>
              <a href="tel:+6212111121" className="hover:text-orange-500 cursor-pointer transition-colors duration-300 text-gray-300">
                (62) 1211 1121
              </a>
            </li>
            <li>
              <a
                href="mailto:customer@rezz.com"
                className="hover: text-gray-300"
              >
                customer@rezz.com
              </a>
            </li>
            <li>Jl. Bintangan 20, Malingga City</li>
            <li>Northern Province</li>
          </ul>
        </div>
         {/* Social Media Icons */}
        {/* <div className="flex space-x-4 mt-4 md:mt-0 md:ml-6">                
           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                    <Instagram className="h-10 w-10" />
                 </a>
                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                     <Twitter className="h-10 w-10" />
                 </a>
                 <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                     <WhatsApp className="h-10 w-10" />
                 </a>
             </div> */}
             <div className="flex  h-20 space-x-4 mt-4 md:mt-0 md:ml-6">                
                {/* Instagram Icon */}
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gray-400 text-pink-500"
                >
                  <Instagram className="" />
                </a>

                {/* Twitter Icon */}
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gray-400 text-blue-400"
                >
                  <Twitter className="h-30 w-30" />
                </a>

                {/* WhatsApp Icon */}
                <a 
                  href="https://wa.me" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gray-400 text-green-500"
                >
                  <WhatsApp className="h-10 w-10" />
                </a>
              </div>

      </div>
    </footer>
  );
};

export default Footer;
