
import React from 'react'
import heroVideo from "../assets/videos/heroSection.mp4";

const HeroSection = () => {
  return (
    <div className="relative video-container h-screen w-full">
      <video
        className="w-full h-full object-cover rounded-3xl"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Main Heading */}
      <div className="absolute bottom-20 sm:left-8 md:left-10 bg-[#FFFFFF0F] text-white sm:px-6 sm:py-6 rounded-2xl  sm:text-base md:text-lg lg:text-xl">
        <span className="left-2">Your one-stop shop for exclusive designs</span>
        <br />
        and must-haves
      </div>
      {/* First Call-to-Action Box */}
      <div className="absolute bottom-36 sm:right-8 md:right-10 flex flex-col gap-4 text-center">
        <div className="bg-[#FFFFFF2B] text-white rounded-lg py-2 px-4 sm:px-6 text-xs sm:text-sm md:text-base lg:text-xl">
          Redefine your style journey
        </div>
      </div>
      {/* Second Call-to-Action Box */}
      <div className="absolute bottom-24 right-4 sm:right-8 md:right-10 flex flex-col">
        <div className="bg-[#FFFFFF2B] text-white rounded-lg py-2 px-4 sm:px-6 text-xs sm:text-sm md:text-base lg:text-xl">
          Discover the joy of effortless shopping
        </div>
      </div>
    </div>
  );
}

export default HeroSection





    