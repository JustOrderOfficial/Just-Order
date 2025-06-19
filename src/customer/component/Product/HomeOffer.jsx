import React from "react";
import { motion } from "framer-motion";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const OfferCard = () => {
  return (
    <div className="bg-[#18181b] p-5">
      <motion.div
        whileHover={{
          scale: 1.025,
          boxShadow: "0 10px 30px 0 rgba(255,115,0,0.3)",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="flex flex-col md:flex-row m-4 border border-orange-400/70 rounded-3xl bg-gradient-to-br from-[#1c1917] via-[#292524] to-[#1c1917] overflow-hidden max-w-5xl mx-auto shadow-lg"
        style={{ borderWidth: "1.5px" }}
      >
        {/* Image Section */}
        <div className="flex-shrink-0 md:w-72 relative">
          <img
            src="./assets/images/t_shirts/Offer.png"
            alt="Back view of T-shirt"
            className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
            style={{ minHeight: "280px" }}
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center px-6 py-6 text-white relative flex-1">
          {/* Discount Badge */}
          <span className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-4 py-1 rounded-full shadow-lg text-sm flex items-center gap-1 select-none">
            <LocalOfferIcon fontSize="small" className="text-white" />
            50% OFF
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Exclusive Offer:{" "}
            <span className="text-orange-400">Up to 50% off</span>, only for
            this month
          </h2>

          <p className="mt-3 text-lg text-gray-300 max-w-xl">
            Shop now and enjoy up to{" "}
            <span className="font-semibold text-orange-300">50% off</span> on
            selected items. Limited time only!
          </p>

          <button className="mt-8 w-44 py-3 bg-orange-500 hover:bg-orange-600 rounded-3xl font-bold text-white text-lg shadow-lg transition duration-300 flex items-center justify-center gap-2 select-none">
            <LocalOfferIcon fontSize="small" className="text-white" />
            Shop Now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OfferCard;
