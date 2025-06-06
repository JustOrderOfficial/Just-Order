import React from 'react';

const OfferCard = () => {
  return (
  
      <div className="flex m-2 border rounded-3xl bg-[#FFFFFF2E]">
        {/* T-Shirt Images */}
        <div className="flex-shrink"> 
          <div className="">
            <img
              src="./assets/images/t_shirts/Offer.png"
              alt="Back view of T-shirt"
              className="rounded-l-3xl"
            />
          </div>
        </div>
        
        {/* Offer Content */}
        <div className="flex flex-col px-8  md:text-left justify-center">
          <h2 className="font-bold text-5xl ">
            Exclusive Offer: <span className="text-orange-500">Up to 50% off</span>, only for this month
          </h2>
          <p className="mt-4 text-lg text-white">
            Shop now and enjoy up to <span className="font-medium text-orange-500">50% off</span> on selected items. Limited time only!
          </p>
          <button className="mt-4 w-1/4 p-2 text-xl font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-3xl">
            Shop Now
          </button>
        </div>
      </div>
    
  );
};

export default OfferCard;
