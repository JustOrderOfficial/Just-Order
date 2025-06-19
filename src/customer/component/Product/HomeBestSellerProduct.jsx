import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";
import products from "../../../assets/data/products";
import { Link } from "react-router-dom";

function HomeBestSellerProduct() {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter only New Arrival products (case & space insensitive)
  const newArrivalProducts = products.filter((p) =>
    p.tags.some((tag) => tag.trim() === "Best Seller")
  );

  return (
    <div className="text-white py-12 px-4 md:px-12 bg-[#0d0d0d]">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Best Seller's
        </h1>
        <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 rounded-full font-semibold text-white shadow-lg">
          See All Items
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newArrivalProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-[#1a1a1a] rounded-2xl p-4 shadow-md hover:shadow-orange-400/30 transition-shadow"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="rounded-xl object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
                />
                {/* Wishlist Icon */}
                <div
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 bg-white/10 p-2 rounded-full backdrop-blur-sm shadow-md cursor-pointer"
                >
                  {wishlist[product.id] ? (
                    <FavoriteIcon className="text-red-500" fontSize="medium" />
                  ) : (
                    <FavoriteBorderIcon
                      className="text-white"
                      fontSize="medium"
                    />
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-4 space-y-1">
                <h2 className="text-lg font-semibold tracking-wide">
                  {product.name}
                </h2>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} fontSize="small" />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">
                    ({product.reviews || "231"} Reviews)
                  </span>
                </div>
                <p className="text-xl font-bold text-orange-400 mt-1">
                  ₹{product.price}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomeBestSellerProduct;
