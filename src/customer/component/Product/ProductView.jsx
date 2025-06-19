import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../../assets/data/products";
import toast from "react-hot-toast";

function ProductView() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [count, setCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.images?.[0]);

  if (!product) {
    return (
      <div className="text-white text-center mt-20">
        <h2 className="text-3xl font-bold">Product not found</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: selectedImage,
      size: selectedSize,
      count,
    };
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("🛒 Added to cart!");
  };

  return (
    <div className="bg-gradient-to-br from-[#0f0f0f]/80 via-[#1a1a1a]/80 to-[#141414]/80 backdrop-blur-md min-h-screen text-white py-12 px-4 sm:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-[#2d2d2d]">
        {/* Product Image and Thumbnails */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full max-w-xs h-80 object-cover rounded-2xl border border-[#3a3a3a] shadow-md"
          />

          <div className="flex gap-2">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumbnail-${index}`}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 object-cover rounded-lg border-2 cursor-pointer ${
                  selectedImage === img
                    ? "border-orange-500"
                    : "border-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold mb-3 tracking-tight text-white">
            {product.name}
          </h1>
          <p className="text-2xl text-orange-500 font-bold mb-2">
            ₹{product.price}
          </p>
          <p className="text-gray-300 mb-5">{product.description}</p>

          <div className="space-y-2 mb-6 text-sm">
            <p className="text-gray-400">
              <span className="font-semibold text-white">Category:</span>{" "}
              {product.category}
            </p>
            <p className="text-gray-400">
              <span className="font-semibold text-white">Gender:</span>{" "}
              {product.gender}
            </p>
            <p className="text-gray-400">
              <span className="font-semibold text-white">Tags:</span>{" "}
              {product.tags?.length ? product.tags.join(", ") : "None"}
            </p>
          </div>

          <div className="flex flex-col  gap-6 mb-8">
            <div>
              <p className="text-gray-300 mb-2 font-medium">Select Size</p>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full border transition ${
                      selectedSize === size
                        ? "bg-orange-600 text-white border-orange-600"
                        : "border-gray-600 text-gray-300 hover:border-orange-400 hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-300 mb-2 font-medium">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                  className="w-9 h-9 bg-gray-700 rounded-full text-xl font-bold hover:bg-orange-600"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{count}</span>
                <button
                  onClick={() => setCount((prev) => prev + 1)}
                  className="w-9 h-9 bg-gray-700 rounded-full text-xl font-bold hover:bg-orange-600"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
