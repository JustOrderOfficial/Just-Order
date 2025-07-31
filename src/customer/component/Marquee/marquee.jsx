import React from "react";
import { motion } from "framer-motion";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Marquee = () => {
  const marqueeItems = Array(20).fill(
    <>
      <LocalShippingIcon
        className="mr-1 sm:mr-2 text-orange-400"
        fontSize="small"
      />
      Free Delivery on Orders Over $100
    </>
  );

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#121212] border border-orange-400/20 shadow-lg shadow-black/30 py-2 sm:py-3">
      {/* Left gradient fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 z-10 bg-gradient-to-r from-[#121212] to-transparent" />
      {/* Right gradient fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 z-10 bg-gradient-to-l from-[#121212] to-transparent" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {marqueeItems.concat(marqueeItems).map((content, idx) => (
          <motion.p
            key={idx}
            whileHover={{ scale: 1.04 }}
            className="flex items-center text-orange-400 font-medium text-xs xs:text-sm sm:text-base mx-2 sm:mx-4 px-3 sm:px-5 py-1.5 sm:py-2 bg-[#1e1e1e] rounded-xl border border-orange-400/10 shadow shadow-orange-400/10 hover:shadow-orange-400/30 transition"
            style={{ userSelect: "none", cursor: "pointer" }}
          >
            {content}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
