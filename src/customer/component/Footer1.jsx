import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, WhatsApp } from "@mui/icons-material";

const Footer1 = () => {
  return (
    <footer className="bg-[#0f0f0f] text-[#cccccc] py-12 px-6 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-10">
        {/* Brand & Newsletter */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Just Order</h1>
          <p className="text-sm text-[#999999] mb-4">
            Curating the looks you love.
          </p>
          <div className="flex items-center bg-[#1a1a1a] rounded-lg overflow-hidden max-w-sm">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 px-4 bg-transparent text-sm text-white placeholder-[#666] focus:outline-none w-full"
            />
            <button className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 text-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-white font-semibold mb-3 text-lg">Categories</h2>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Collection", "Support"].map((label, i) => (
              <li key={i}>
                <Link
                  to={["/", "/about", "/collection", "/support"][i]}
                  className="hover:text-orange-400 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="text-white font-semibold mb-3 text-lg">
            Customer Support
          </h2>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Complaint Center", link: "/complaint-center" },
              { name: "Dealing Partners", link: "/dealing-partners" },
              { name: "Privacy Policy", link: "/privacy-policy" },
              { name: "Terms of Use", link: "/terms-of-use" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.link}
                  className="hover:text-orange-400 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-white font-semibold mb-3 text-lg">Contact Us</h2>
          <ul className="space-y-1 text-sm mb-4">
            <li>
              <a href="tel:+6212111121" className="hover:text-orange-400">
                (62) 1211 1121
              </a>
            </li>
            <li>
              <a
                href="mailto:customer@rezz.com"
                className="hover:text-orange-400"
              >
                customer@rezz.com
              </a>
            </li>
            <li>Jl. Bintangan 20, Malingga City</li>
            <li>Northern Province</li>
          </ul>
          <div className="flex gap-4 text-[#999]">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <Twitter />
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <WhatsApp />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-[#2a2a2a] pt-6 text-sm text-center text-[#777]">
        &copy; {new Date().getFullYear()} Just Order. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer1;
