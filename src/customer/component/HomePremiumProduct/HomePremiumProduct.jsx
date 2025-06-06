

import React from 'react';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function HomeProductCard() {
  return (
    <div
      className="relative flex bg-black text-white rounded-2xl items-center justify-center mx-auto px-4"
      style={{
        width: "810px",
        height: "560px",
      }}
    >
      

      {/* Product Image */}
      <div className="relative flex justify-center items-center rounded-lg overflow-hidden p-4 md:w-1/2 ml-2">
        <img
          src="assets/images/t_shirts/black_hoodie.png"
          alt="Hoodie"
          className="w-full max-w-sm"
          style={{ maxWidth: "384px" }}
        />
        {/* Icons */}
        <div className="absolute top-4 right-2 mx-6  my-4 rounded-full shadow-lg transition duration-300 cursor-pointer">
        <FavoriteBorderIcon className="text-orange-500"
        style={{fontSize:"30px"}}/>
      </div>
         
        
      </div>

      {/* Product Details */}
      <div className="flex flex-col md:text-left md:w-1/2 px-4">
        <h2 className="text-4xl font-bold leading-tight" style={{
  fontFamily: "TGS Perfect, sans-serif",
  fontSize: "50px",
}}>
          HUMANS ARE <br />
          NATURAL DISASTER<br/> HOODIE
        </h2>

        {/* Price Section */}
        <div className="flex justify-start md:justify-start items-start space-x-4 py-4">
          <span className="text-gray-500 line-through text-xl">Rs. 1,999</span>
          <span className="text-white text-xl px-4 border border-orange-500 rounded-full font-semibold">Rs. 1,199</span>
        </div>

        {/* Discount Badge */}
        <div className="flex justify-start md:justify-start items-start">
          <span className='bg-orange-500 py-1 px-4 rounded-full text-white font-bold'>-6% OFF</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0 bottom-16 mt-8 mr-4">
          <button className="w-full md:w-auto px-20 py-1 text-xl font-bold text-white rounded-3xl bg-orange-500 transition-colors duration-300">
            BUY IT NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeProductCard;
