import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductPage = () => {
  const [size, setSize] = useState("XS");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("/assets/images/t_shirts/Jacket.png");

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const imageLinks = [
    { src: "/assets/images/t_shirts/Jacket.png", alt: "Image 1" },
    { src: "/assets/images/t_shirts/LemonHoodie.png", alt: "Image 2" },
    { src: "/assets/images/t_shirts/PistaHoodie.png", alt: "Image 3" },
    { src: "/assets/images/t_shirts/WhiteHoodie.png", alt: "Image 4" },
  ];

  return (
    <div className=" text-white min-h-screen pt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        {/* Left Side - Image Thumbnails */}
        <div className="col-span-2 space-y-3">
          {imageLinks.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              onClick={() => setSelectedImage(img.src)}
              className={` h-20 object-cover rounded-2xl border ${
                selectedImage === img.src
                  ? "border-orange-500"
                  : "border-gray-700"
              } cursor-pointer hover:opacity-75`}
            />
          ))}
        </div>

        {/* Middle Section - Main Image */}
        <div className="col-span-5">
          <img
            src={selectedImage}
            alt="Selected Product"
            className="w-full h-full object-cover rounded-3xl 0"
          />
        </div>

        {/* Right Side - Product Details */}
        <div className="col-span-3 text-left">
          <p className="font-bold text-5xl">Monday Morning</p>
          <p className="font-semibold text-3xl"> - Boxy Fit Oversized T-Shirt</p>
          <span className="text-white line-through decoration-orange-500 mt-2">Rs. 1,800.00</span>
          <span className="text-2xl font-semibold text-white "> Rs. 1,440.00</span>
          <p className="text-sm text-white mt-2">Tax Included.</p>

          {/* Size Selection */}
          <div className="mt-6">
            <p className="text-lg font-medium mb-2">Size</p>
            <div className="flex space-x-3 text-bold">
              {["XS", "S", "M", "L", "XL"].map((sizeOption) => (
                <button
                  key={sizeOption}
                  onClick={() => handleSizeChange(sizeOption)}
                  className={`w-10 px-8 h-10 flex items-center justify-center border rounded-2xl  ${
                    size === sizeOption
                      ? "bg-white text-orange-500"
                      : "border-gray-500 text-gray-300"
                  }`}
                >
                  {sizeOption}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mt-6 flex items-center">
            <p className="text-lg font-medium mr-4">Quantity</p> <br/>
            <div className="flex items-center border  rounded-md">
              <IconButton
                onClick={() => handleQuantityChange("decrement")}
                className="text-white bg-gray-800 hover:bg-gray-700 p-1"
                style={
                  {
                    color:"white"
                  }
                }
              >
                -
              </IconButton>
              <span className="px-3 text-lg">{quantity}</span>
              <IconButton
                onClick={() => handleQuantityChange("increment")}
                className="text-white  bg-white p-1"
                style={
                  {
                    color:"white"
                  }
                }
              >
                +
              </IconButton>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 space-y-2">
            <Button
              variant="contained"
              color="warning"
              
              startIcon={<ShoppingCartIcon/>}
              className="w-96 bg-orange-500 rounded-[20px] hover:bg-orange-600"
            >
              Add to Cart
            </Button>

            <Button
              variant="contained"
              color="warning"
              className="w-96 bg-orange-500 hover:bg-orange-600 py-3 text-white"
            >
              Buy It Now
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
