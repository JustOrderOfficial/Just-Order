import React, { useState } from "react";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import products from "../../../assets/data/products";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id, e) => {
    e.preventDefault(); 
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const newArrivalProducts = products.filter((product) =>
    product.tags?.some((tag) => tag.trim().toLowerCase() === "new arrival")
  );

  return (
    <div className="bg-[#121212] py-10 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-white">
            New Arrivals
          </h1>
          <button className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 text-sm sm:text-base rounded-full font-semibold shadow-lg text-white">
            See All Items
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newArrivalProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative bg-[#1a1a1a] border border-orange-400/20 rounded-3xl shadow-md shadow-black/30 flex flex-col sm:flex-row overflow-hidden"
              >
                {/* Image */}
                <div className="sm:w-56 w-full">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="h-52 sm:h-64 md:h-full w-full object-cover transition-transform duration-300 hover:scale-105 sm:rounded-l-3xl"
                  />
                </div>

                {/* Info Section */}
                <div className="flex flex-col justify-between p-5 flex-1 relative text-white">
                  {/* Wishlist Icon */}
                  <div
                    onClick={(e) => toggleWishlist(product.id, e)}
                    className="absolute top-4 right-4 cursor-pointer rounded-full p-1.5 sm:p-2 bg-[#262626] hover:bg-orange-500 transition"
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

                  {/* Name & Rating */}
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                      {product.name}
                    </h2>
                    <p className="flex items-center space-x-2 mb-4">
                      <span className="text-yellow-400 text-sm sm:text-base">
                        ★★★★★
                      </span>
                      <span className="text-gray-400 text-xs sm:text-sm">
                        ({product.reviews || 100} Reviews)
                      </span>
                    </p>
                  </div>

                  {/* Price */}
                  <p className="text-xl sm:text-2xl font-bold text-orange-400">
                    ₹{product.price}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
