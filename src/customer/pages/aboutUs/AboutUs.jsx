import React from "react";
import { motion } from "framer-motion";
import WcIcon from "@mui/icons-material/Wc";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const AboutUs = () => {
  const cards = [
    {
      icon: <WcIcon style={{ fontSize: 30 }} />,
      title: "Local Community Presence",
      desc: "Our impactful initiatives actively engage the community, empowering positive change and individual growth.",
      img: "/assets/images/t_shirts/White_hoodie.png",
    },
    {
      icon: <Diversity2Icon style={{ fontSize: 30 }} />,
      title: "Total Transparency",
      desc: "We maintain a steadfast commitment to total transparency through rigorous reporting and sharing all operational details.",
      img: "/assets/images/t_shirts/BlackHoodieWater.png",
    },
    {
      icon: <VolunteerActivismIcon style={{ fontSize: 30 }} />,
      title: "Whole Human Focus",
      desc: "Our holistic approach prioritizes wellbeing, covering health, education, empowerment, and community support.",
      img: "/assets/images/t_shirts/WhiteHoodieShadow.png",
    },
  ];

  return (
    <div className="min-h-screen text-white px-4 sm:px-8 md:px-12 lg:px-20 py-16">
      {/* Top Image */}
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        src="/assets/images/t_shirts/AboutImg.png"
        alt="Hoodie"
        className="w-full max-w-lg mx-auto object-contain"
      />

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 pt-16">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            About Us
          </h2>
          <span className="bg-orange-500 text-white rounded-md px-6 py-2 text-base sm:text-lg font-semibold mb-4 inline-block shadow-md">
            Home
          </span>
          <p className="mb-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
            At Just Order, we believe that a T-shirt is more than just
            clothing—it’s a canvas for self-expression. Founded with a passion
            for creativity and comfort, we design high-quality, stylish T-shirts
            that blend timeless fashion with bold, unique designs.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
            Our commitment to sustainability and quality ensures each T-shirt is
            crafted with care, providing both comfort and durability. Join us in
            celebrating individuality—one tee at a time.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.img
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="/assets/images/t_shirts/MNC_team.png"
          alt="Team"
          className="flex-1 w-full max-w-md mx-auto rounded-2xl shadow-lg"
        />
      </div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left text-3xl sm:text-4xl font-bold mt-16"
      >
        The Purpose <span className="text-orange-500">Behind Our Passion</span>
      </motion.h2>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center md:justify-start gap-8 pt-12">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            whileHover={{ y: -8, scale: 1.04 }}
            className="bg-gray-500/20 backdrop-blur-md border border-gray-300/20 rounded-3xl shadow-lg 
                 p-5 sm:p-6 md:p-7 lg:p-8
                 max-w-xs sm:max-w-sm md:max-w-[340px] lg:max-w-[380px] 
                 flex flex-col items-center transition-transform duration-300 hover:shadow-orange-400/30"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full rounded-xl mb-4 object-cover 
                   h-40 sm:h-48 md:h-52 lg:h-60"
            />

            <div className="bg-orange-500 w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full mb-4 shadow-md">
              {card.icon}
            </div>

            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-center">
              {card.title}
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-center text-gray-300 leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
