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

  const newArrivalProducts = products.filter((p) =>
    p.tags.some((tag) => tag.trim().toLowerCase() === "best seller")
  );

  return (
    <div className="text-white py-10 px-4 sm:px-6 md:px-12 bg-[#0d0d0d]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Best Seller's
        </h1>
        <button className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 text-sm sm:text-base rounded-full font-semibold text-white shadow-lg">
          See All Items
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6">
        {newArrivalProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-[#1a1a1a] rounded-2xl p-3 sm:p-4 shadow-md hover:shadow-orange-400/30 transition-shadow"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="rounded-xl object-cover w-full h-52 sm:h-64 md:h-72 lg:h-64 xl:h-60 2xl:h-72 hover:scale-105 transition-transform duration-300"
                />
                {/* Wishlist Icon */}
                <div
                  onClick={(e) => {
                    e.preventDefault(); // prevent link trigger
                    toggleWishlist(product.id);
                  }}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/10 p-1.5 sm:p-2 rounded-full backdrop-blur-sm shadow-md cursor-pointer"
                >
                  {wishlist[product.id] ? (
                    <FavoriteIcon className="text-red-500" fontSize="small" />
                  ) : (
                    <FavoriteBorderIcon
                      className="text-white"
                      fontSize="small"
                    />
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-4 space-y-1">
                <h2 className="text-base sm:text-lg font-semibold tracking-wide line-clamp-2">
                  {product.name}
                </h2>
                <div className="flex items-center text-yellow-400 text-xs sm:text-sm">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} fontSize="inherit" />
                  ))}
                  <span className="text-gray-400 ml-2">
                    ({product.reviews || "231"} Reviews)
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-orange-400 mt-1">
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
