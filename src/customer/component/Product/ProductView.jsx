import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../../assets/data/products";
import toast from "react-hot-toast";
import { Facebook, Instagram, Heart, HeartOff } from "lucide-react";

function ProductView() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [count, setCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0]);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavourite(favs.includes(product.id));
  }, [product.id]);

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
    toast.success("Added to cart");
  };

  const handleToggleFavourite = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavs;

    if (isFavourite) {
      updatedFavs = favs.filter((pid) => pid !== product.id);
      toast("Removed from wishlist");
    } else {
      updatedFavs = [...favs, product.id];
      toast.success("Added to wishlist");
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavs));
    setIsFavourite(!isFavourite);
  };

  const discountedPrice = product.discount
    ? product.price - Math.floor((product.price * product.discount) / 100)
    : product.price;

  return (
    <div className="bg-gradient-to-br from-[#0f0f0f]/80 via-[#1a1a1a]/80 to-[#141414]/80 min-h-screen text-white py-12 px-4 sm:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-[#2d2d2d]">
        {/* Images */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full max-w-xs h-80 object-cover rounded-2xl border border-[#3a3a3a]"
          />
          <div className="flex gap-2 flex-wrap">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
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

        {/* Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-3 mt-2">
              <p className="text-2xl text-orange-500 font-bold">
                ₹{discountedPrice}
              </p>
              {product.discount > 0 && (
                <>
                  <p className="text-gray-400 line-through text-lg">
                    ₹{product.price}
                  </p>
                  <p className="text-green-500 text-sm">
                    ({product.discount}% OFF)
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 text-yellow-400 text-xl">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
            <span className="text-gray-300 text-sm">
              ({product.reviews} Reviews)
            </span>
          </div>

          <p className="text-gray-300">{product.description}</p>

          <p
            className={`font-semibold ${
              product.inStock ? "text-green-400" : "text-red-500"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>

          {/* Size */}
          <div>
            <div className="flex items-center justify-between">
              <p className="text-gray-300 font-medium mb-1">Select Size</p>
              <a href="/size-guide" className="text-sm text-blue-400 underline">
                Size Guide
              </a>
            </div>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedSize === size
                      ? "bg-orange-600 border-orange-600 text-white"
                      : "border-gray-600 text-gray-300 hover:border-orange-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <p className="text-gray-300 font-medium mb-1">Quantity</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                className="w-9 h-9 bg-gray-700 rounded-full text-xl hover:bg-orange-600"
              >
                -
              </button>
              <span className="text-lg font-semibold">{count}</span>
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="w-9 h-9 bg-gray-700 rounded-full text-xl hover:bg-orange-600"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full font-bold text-white transition-all"
            >
              Add to Cart
            </button>
            <button
              onClick={handleToggleFavourite}
              className={`flex-1 border px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all ${
                isFavourite
                  ? "border-red-500 text-red-400 hover:bg-red-500/10"
                  : "border-gray-600 text-white hover:border-orange-500"
              }`}
            >
              {isFavourite ? (
                <>
                  <HeartOff size={16} /> Saved
                </>
              ) : (
                <>
                  <Heart size={16} /> Add to Wishlist
                </>
              )}
            </button>
          </div>

          {/* Shipping Info */}
          <div className="text-sm text-gray-400 mt-2 space-y-1">
            <p>
              Estimated delivery: <b>June 25 – June 28</b>
            </p>
            <p>Free Shipping on orders above ₹999</p>
            <p>10-day return available</p>
          </div>

          {/* Highlights */}
          <div className="mt-4 text-sm space-y-1 text-gray-300">
            <p>
              <b>Fabric:</b> {product.fabric}
            </p>
            <p>
              <b>Fit:</b> {product.fit}
            </p>
            <p>
              <b>GSM:</b> {product.gsm}
            </p>
            <p>
              <b>Wash Care:</b> Machine Wash
            </p>
            <p>
              <b>Category:</b> {product.category}
            </p>
            <p>
              <b>Gender:</b> {product.gender}
            </p>
            <p>
              <b>Tags:</b> {product.tags?.join(", ")}
            </p>
          </div>

          {/* Share */}
          <div className="mt-6 flex gap-4 text-sm">
            <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full">
              <Facebook className="w-5 h-5 text-white" />
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full">
              <Instagram className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
