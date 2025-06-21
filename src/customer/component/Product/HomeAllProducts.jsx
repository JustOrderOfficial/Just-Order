import React, { useState } from "react";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import products from "../../../assets/data/products";

function HomeAllProducts() {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id, e) => {
    e.preventDefault(); // prevent navigating when heart is clicked
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-black text-white py-10 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-white">
          All Products{" "}
          <span className="text-gray-400 text-base sm:text-lg font-normal">
            (1107 Items)
          </span>
        </h1>
        <Link to="/Category/ProductGrid">
          <button className="bg-orange-600 hover:bg-orange-700 transition-colors duration-300 px-5 py-2 text-sm sm:text-base rounded-full font-semibold shadow-md text-white">
            See All Items
          </button>
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 140 }}
              className="relative bg-[#0f0f0f] border border-[#2d2d2d] rounded-3xl shadow-md overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-52 sm:h-64 md:h-72 object-cover rounded-t-3xl transition-transform duration-300 hover:scale-105"
              />

              {/* Wishlist Icon */}
              <div
                onClick={(e) => toggleWishlist(product.id, e)}
                className="absolute top-3 right-3 cursor-pointer rounded-full p-1.5 sm:p-2 bg-[#2d2d2d] hover:bg-orange-600 transition-colors duration-300"
              >
                {wishlist[product.id] ? (
                  <FavoriteIcon
                    className="text-orange-400"
                    style={{ fontSize: 26 }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    className="text-orange-400"
                    style={{ fontSize: 26 }}
                  />
                )}
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-1 text-white line-clamp-2">
                  {product.name}
                </h2>
                <div className="flex items-center text-orange-400 text-xs sm:text-sm mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} fontSize="inherit" />
                  ))}
                  <span className="text-gray-400 ml-2">
                    ({product.reviews || 0} Reviews)
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-orange-500">
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

export default HomeAllProducts;
