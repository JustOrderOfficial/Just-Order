
import React from "react";

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {[...Array(50)].map((_, index) => (
          <p
            key={index}
            className="text-white font-bold bg-orange-500 text-sm py-2 px-2"
          >
            • Get Free Delivery On Orders Over $100
          </p>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
