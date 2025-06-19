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
import { Link } from "react-router-dom";
import { Instagram, Twitter, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold text-white">Just Order</h1>
          <p className="text-slate-400 text-sm">Curating the looks you love.</p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-md bg-[#1f2937] text-sm text-white placeholder-slate-400 w-56"
            />
            <button className="ml-2 bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-md transition-colors duration-200 text-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col sm:flex-row justify-between w-full lg:w-2/3 gap-10 text-sm">
          {/* Categories */}
          <div className="space-y-2">
            <h2 className="text-white font-medium mb-2">Categories</h2>
            <ul className="space-y-1">
              {["Home", "About", "Collection", "Support"].map((label, i) => (
                <li key={i}>
                  <Link
                    to={["/", "/about", "/collection", "/support"][i]}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-2">
            <h2 className="text-white font-medium mb-2">Customer Support</h2>
            <ul className="space-y-1">
              {[
                { name: "Complaint Center", link: "/complaint-center" },
                { name: "Dealing Partners", link: "/dealing-partners" },
                { name: "Privacy Policy", link: "/privacy-policy" },
                { name: "Terms of Use", link: "/terms-of-use" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.link}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-2">
            <h2 className="text-white font-medium mb-2">Contact Us</h2>
            <ul className="space-y-1 text-slate-300">
              <li>
                <a href="tel:+6212111121" className="hover:text-teal-400">
                  (62) 1211 1121
                </a>
              </li>
              <li>
                <a
                  href="mailto:customer@rezz.com"
                  className="hover:text-teal-400"
                >
                  customer@rezz.com
                </a>
              </li>
              <li>Jl. Bintangan 20, Malingga City</li>
              <li>Northern Province</li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 mt-4 lg:mt-0">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <Twitter />
          </a>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <WhatsApp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
