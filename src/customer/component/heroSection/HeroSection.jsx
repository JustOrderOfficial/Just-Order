import React from "react";
import heroVideo from "../assets/videos/heroSection.mp4";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden rounded-2xl shadow-2xl">
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
        className="absolute z-20 bottom-20 xs:bottom-16 left-4 sm:left-6 md:left-10 max-w-[90%] xs:max-w-[85%] sm:max-w-[70%] lg:max-w-[60%]"
      >
        <div className="bg-[#1c1c1ed9] backdrop-blur-md text-white px-4 xs:px-5 sm:px-6 py-4 sm:py-5 rounded-2xl sm:rounded-3xl shadow-xl">
          <h1
            className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug tracking-wide"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Your one-stop shop for{" "}
            <span className="text-orange-400">exclusive designs</span>
          </h1>
          <p
            className="mt-2 xs:mt-3 text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Must-haves for every{" "}
            <span className="text-orange-300 font-semibold">vibe</span> &{" "}
            <span className="text-orange-500 font-semibold">season</span>.
          </p>
        </div>
      </motion.div>

      {/* Floating CTA Badges */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute z-20 bottom-36 xs:bottom-32 right-2 xs:right-4 sm:right-8 md:right-12 flex flex-col gap-2 xs:gap-3 text-right"
      >
        <motion.div
          whileHover={{ scale: 1.07 }}
          className="bg-[#1c1c1ec0] backdrop-blur-lg text-white rounded-lg sm:rounded-xl px-4 py-2 sm:px-5 sm:py-3 shadow-md text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300"
        >
          Redefine your{" "}
          <span className="text-orange-300 font-medium">style journey</span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.07 }}
          className="bg-[#1c1c1ec0] backdrop-blur-lg text-white rounded-lg sm:rounded-xl px-4 py-2 sm:px-5 sm:py-3 shadow-md text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300"
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
