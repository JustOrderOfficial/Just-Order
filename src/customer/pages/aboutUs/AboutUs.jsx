import React from "react";
// import { Button, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import WcIcon from '@mui/icons-material/Wc';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const AboutUs = () => {

  return (
    <div className="min-h-screen text-white px-6 py-16">
      {/* Top Section: Hoodie */}
      <div className="relative flex flex-col items-center mb-16">
        <div className="relative">
          <img
            src="/assets/images/t_shirts/AboutImg.png"
            alt="Hoodie"
            className="w-3/5 mx-auto"
          />

        </div>

        {/* About Us Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 pt-16">
          {/* Left Text Section */}
          <div className="flex-1 text-left md:text-left md:ml-32">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <span className="bg-orange-500 text-white rounded-md px-8 py-2 text-lg font-semibold mb-4 inline-block">
              Home
            </span>
            <p className="mb-4">
              At Just Order, We Believe That A T-Shirt Is More Than Just Clothing—It’s
              A Canvas For Self-Expression. Founded With A Passion For Creativity And
              Comfort, We Design High-Quality, Stylish T-Shirts That Blend Timeless
              Fashion With Bold, Unique Designs. Whether You’re Looking For Everyday
              Essentials Or Standout Pieces, We’ve Got You Covered.
            </p>
            <p>
              Our Commitment To Sustainability And Quality Means Each T-Shirt Is
              Crafted With Care, Ensuring Both Comfort And Durability. Join Us In
              Celebrating Individuality And Making A Statement, One Tee At A Time.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex-1">
            <img
              src="/assets/images/t_shirts/MNC_team.png"
              alt="About Us Illustration"
              className="w-full h-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Second Section: Team Members */}
        <div className="w-full pt-16 text-left md:ml-8">
          <h2 className="text-4xl ml-28 font-semibold">
            The Purpose <span className="text-orange-500">Behind</span> <br />
            <span className="text-orange-500">Our Passion</span>
          </h2>
        </div>

 {/* Parent Container */}
<div className="flex gap-4 ml-8 pt-8 group">
  {/* Last Column (translate down on hover) */}
  <div className="flex flex-col overflow-hidden">
    <div className="flex-1 relative transition-transform duration-500 ease-in-out group-hover:translate-y-full z-10">
      <img src="/assets/images/t_shirts/White_hoodie.png" alt="" />
    </div>
    <div className="flex mt-4 bg-gray-500 rounded-3xl border border-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 flex-col items-left space-x-4 mb-4 w-[400px] p-3 h-[240px] ">
      <div className="bg-orange-500 ml-4 mt-4 w-14 h-14 rounded-full">
        <WcIcon className="mt-3" style={{ fontSize: "30px" }} />
      </div>
      <h3 className="pt-4 text-left text-xl font-semibold">
        Local Community Presence
      </h3>
      <p className="pt-2 text-white text-left">
        Our impactful initiatives actively engage the community, empowering
        positive change and individual growth.
      </p>
    </div>
  </div>

  <div className="flex flex-col overflow-hidden">
    <div className="flex bg-gray-500 rounded-3xl border border-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 flex-col items-left space-x-4 mb-4 w-[400px] p-3 h-[240px] ">
      <div className="bg-orange-500 ml-4 mt-4 w-14 h-14 rounded-full">
        <Diversity2Icon className="mt-3" style={{ fontSize: "30px" }} />
      </div>
      <h3 className="pt-4 text-left text-xl font-semibold">
        Total Transparency
      </h3>
      <p className="pt-2 text-white text-left">
        Vively maintains a steadfast commitment to total transparency through rigorous reporting and publicly
        sharing all operational details
      </p>
    </div>
    <div className="flex-1 relative transition-transform duration-500 ease-in-out group-hover:-translate-y-full z-10">
      <img src="/assets/images/t_shirts/BlackHoodieWater.png" alt="" />
    </div>
  </div>

  <div className="flex flex-col overflow-hidden">
    <div className="flex-1 transition-transform duration-500 ease-in-out group-hover:translate-y-full z-10">
      <img src="/assets/images/t_shirts/WhiteHoodieShadow.png" alt="" />
    </div>
    <div className="flex mt-4 bg-gray-500 rounded-3xl border border-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 flex-col items-left space-x-4 mb-4 w-[400px] p-3 h-[240px] ">
      <div className="bg-orange-500 ml-4 mt-4 w-14 h-14 rounded-full">
        <VolunteerActivismIcon className="mt-3" style={{ fontSize: "30px" }} />
      </div>
      <h3 className="pt-4 text-left text-xl font-semibold">
        Whole Human Focus
      </h3>
      <p className="pt-2 text-white text-left">
        Our holistic approach prioritizes comprehensive wellbeing, covering health, education,
        economic empowerment, and community support.
      </p>
    </div>
  </div>
</div>


      </div>
    </div>

  );
};

export default AboutUs;

