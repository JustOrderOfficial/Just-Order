import React from "react";
import { motion } from "framer-motion";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Marquee = () => {
  const marqueeItems = Array(20).fill(
    <>
      <LocalShippingIcon className="mr-2 text-yellow-400" fontSize="small" />
      Get Free Delivery On Orders Over $100
    </>
  );

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#18181b] via-[#0f0f0f] to-[#18181b] shadow-inner select-none py-3">
      {/* Left gradient fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-[#18181b] to-transparent" />
      {/* Right gradient fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-[#18181b] to-transparent" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {marqueeItems.concat(marqueeItems).map((content, idx) => (
          <motion.p
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="flex items-center text-teal-300 font-semibold text-lg mx-6 px-4 py-2 rounded-lg bg-teal-900/40 shadow"
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
