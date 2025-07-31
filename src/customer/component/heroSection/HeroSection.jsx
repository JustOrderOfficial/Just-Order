import React from "react";
import heroVideo from "../assets/videos/heroSection.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden rounded-2xl shadow-2xl">
      {/* Background Video */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

      {/* Headline Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute z-20 bottom-14 sm:bottom-20 left-3 sm:left-6 md:left-10 max-w-[92%] sm:max-w-[75%] lg:max-w-[60%]"
      >
        <div className="bg-black/60 backdrop-blur-md text-white px-3 sm:px-5 md:px-6 py-3 sm:py-5 rounded-xl sm:rounded-2xl shadow-xl">
          <h1
            className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-snug tracking-wide"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Your{" "}
            <span className="text-orange-400 drop-shadow-lg">
              One‑Stop Shop
            </span>{" "}
            for <span className="text-orange-300 ">Exclusive Designs</span>
          </h1>

          <p
            className="mt-2 sm:mt-3 text-gray-300 text-xs sm:text-base md:text-lg"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Must-haves for every{" "}
            <span className="text-orange-300 font-semibold">vibe</span> &{" "}
            <span className="text-orange-500 font-semibold">season</span>.
          </p>
        </div>
      </motion.div>

      {/* Floating CTA Badges (hidden on very small screens) */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute z-20 bottom-28 sm:bottom-32 right-2 sm:right-6 md:right-10 flex-col gap-2 sm:gap-3 text-right hidden sm:flex"
      >
        {/* Show only ONE badge for small screens, TWO for md+ */}
        <motion.div
          whileHover={{ scale: 1.07 }}
          className="bg-black/60 backdrop-blur-lg text-white rounded-lg sm:rounded-xl px-3 sm:px-5 py-2 sm:py-3 shadow-md text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300"
        >
          Redefine your{" "}
          <span className="text-orange-300 font-medium">style journey</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.07 }}
          className="hidden md:block bg-black/60 backdrop-blur-lg text-white rounded-lg sm:rounded-xl px-3 sm:px-5 py-2 sm:py-3 shadow-md text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300"
        >
          Discover the joy of{" "}
          <span className="text-orange-300 font-medium">
            effortless shopping
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
