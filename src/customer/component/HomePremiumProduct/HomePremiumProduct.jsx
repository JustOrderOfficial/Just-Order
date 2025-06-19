import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function HomeProductCard() {
  const [liked, setLiked] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-[#18181b] text-white rounded-3xl p-6 mx-auto w-full max-w-6xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-center backdrop-blur-sm border border-white/10"
    >
      {/* Product Image */}
      <motion.div
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative w-full md:w-1/2 flex items-center justify-center mb-6 md:mb-0"
      >
        <img
          src="assets/images/t_shirts/black_hoodie.png"
          alt="Hoodie"
          className="rounded-2xl max-w-[320px] w-full hover:scale-105 transition-transform duration-500"
        />
        {/* Heart Icon Toggle */}
        <div
          className="absolute top-4 right-4 bg-white/10 p-2 rounded-full backdrop-blur-md cursor-pointer shadow-md"
          onClick={() => setLiked((prev) => !prev)}
          // Remove motion or hover/whileHover from this div
        >
          {liked ? (
            <FavoriteIcon
              className="text-red-500"
              style={{ fontSize: "28px" }}
            />
          ) : (
            <FavoriteBorderIcon
              className="text-red-500"
              style={{ fontSize: "28px" }}
            />
          )}
        </div>
      </motion.div>

      {/* Product Details */}
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 px-4 md:px-6 flex flex-col items-start text-left"
      >
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-snug"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          HUMANS ARE <br /> NATURAL DISASTER <br /> HOODIE
        </h2>

        {/* Price Section */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gray-400 line-through text-lg sm:text-xl">
            ₹1,999
          </span>
          <span className="text-emerald-400 font-bold border border-teal-500 rounded-full px-5 py-1 text-lg sm:text-xl">
            ₹1,199
          </span>
        </div>

        {/* Discount Badge */}
        <span className="bg-gradient-to-r from-yellow-500 to-orange-400 px-5 py-1 text-sm font-bold rounded-full text-white mb-6 shadow-md">
          -6% OFF
        </span>

        {/* CTA */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold px-10 py-2 rounded-full shadow-lg transition-all duration-300"
        >
          BUY IT NOW
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default HomeProductCard;
