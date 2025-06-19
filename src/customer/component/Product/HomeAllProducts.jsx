import React, { useState } from "react";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import products from "../../../assets/data/products";

function HomeAllProducts() {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-black text-white py-8 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-wide text-white">
          All Products{" "}
          <span className="text-gray-400 text-lg font-normal">
            (1107 Items)
          </span>
        </h1>
        <Link to="/Category/ProductGrid">
          <button className="bg-orange-600 hover:bg-orange-700 transition-colors duration-300 px-6 py-2 rounded-full font-semibold shadow-md text-white">
            See All Items
          </button>
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative bg-[#0f0f0f] border border-[#2d2d2d] rounded-3xl shadow-md overflow-hidden"
          >
            {/* Product Image */}
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-3xl transition-transform duration-300 hover:scale-105"
            />

            {/* Wishlist Icon */}
            <div
              onClick={() => toggleWishlist(product.id)}
              className="absolute top-4 right-4 cursor-pointer rounded-full p-2 bg-[#2d2d2d] hover:bg-orange-600 transition-colors duration-300"
            >
              {wishlist[product.id] ? (
                <FavoriteIcon
                  className="text-orange-400"
                  style={{ fontSize: 30 }}
                />
              ) : (
                <FavoriteBorderIcon
                  className="text-orange-400"
                  style={{ fontSize: 30 }}
                />
              )}
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1 text-white">
                {product.name}
              </h2>
              <div className="flex items-center space-x-1 text-orange-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} fontSize="small" />
                ))}
                <span className="text-gray-400 text-sm ml-2">
                  ({product.reviews} Reviews)
                </span>
              </div>
              <p className="text-xl font-bold text-orange-500">
                {product.price}
              </p>
            </div>
          </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomeAllProducts;
