// import React from "react";

// const AddressCard = ({address}) => {
//   return (
//     <div>
//       {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
//       <div className="space-y-3">
//         <p className="font-semibold">{`${address?.firstName} ${address?.lastName}`}</p>

//         <p>
//           {`${address?.streetAddress} ${address?.city} ${address?.state} ${address?.zipCode}`}
//         </p>

//         <div className="space-y-1">
//           <p className="font-semibold">Phone Number</p>
//           <p>{address?.mobile}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddressCard;


// Import dependencies
import React from "react";
import { Button, Typography } from "@mui/material";

// Example component for the Hoodie UI
export default function AddressCard() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Product Header */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Product Image */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/500" // Replace with actual image URL
            alt="Classic Hoodie"
            className="w-full object-cover"
          />
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded">
            Lowest Price in Last 30 Days
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <Typography variant="h5" className="font-bold">
            Classic Hoodie
          </Typography>
          <Typography variant="body1" className="text-green-600 font-bold">
            ₹1,299 <span className="line-through text-gray-500">₹3,799</span>
          </Typography>
          <Typography variant="body2" className="text-gray-600">
            Inclusive of all taxes
          </Typography>

          {/* Offers */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <Typography variant="body2">Flat ₹250 OFF on orders ₹1997+</Typography>
              <Button variant="outlined" size="small">
                WIN250
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <Typography variant="body2">Flat ₹500 OFF on orders ₹2997+</Typography>
              <Button variant="outlined" size="small">
                WIN500
              </Button>
            </div>
          </div>

          {/* Select Size */}
          <div className="mt-6">
            <Typography variant="h6" className="mb-2 font-medium">
              Select Size
            </Typography>
            <div className="flex space-x-2">
              {[
                { size: "S", available: true },
                { size: "M", available: false },
                { size: "L", available: true },
                { size: "XL", available: true },
                { size: "XXL", available: true },
              ].map((item, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded border border-gray-300 ${
                    item.available
                      ? "bg-white text-gray-800 hover:bg-gray-100"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!item.available}
                >
                  {item.size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <Button variant="contained" color="primary" fullWidth>
              Add to Cart
            </Button>
            <Button variant="outlined" fullWidth>
              Buy Now
            </Button>
          </div>

          {/* Highlights */}
          <div className="mt-6">
            <Typography variant="h6" className="font-medium">
              Key Highlights
            </Typography>
            <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
              <li>Regular Fit</li>
              <li>Cotton Rich Fabric</li>
              <li>Cuffed Sleeves</li>
              <li>Solid Pattern</li>
            </ul>
          </div>

          {/* Policies */}
          <div className="mt-6 space-y-2">
            <Typography variant="body2" className="text-gray-600">
              Free Shipping Across India
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              7 Days Returns & Exchange
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
