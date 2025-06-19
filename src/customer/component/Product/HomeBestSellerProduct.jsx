import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

function HomeBestSellerProduct() {
  const products = [
    {
      id: 1,
      name: "Ramy Coat",
      price: "₹115.00",
      reviews: "971",
      image: "./assets/images/t_shirts/Black_Full_Tshirt.png",
    },
    {
      id: 2,
      name: "Vayo Sweater",
      price: "₹105.00",
      reviews: "1k",
      image: "./assets/images/t_shirts/BlueHoodie.png",
    },
    {
      id: 3,
      name: "Baro Leather Jacket",
      price: "₹125.00",
      reviews: "1k",
      image: "./assets/images/t_shirts/BlackHoodie.png",
    },
    {
      id: 4,
      name: "Emy Blue Blazer",
      price: "₹105.00",
      reviews: "1k",
      image: "./assets/images/t_shirts/Black_Full_Tshirt.png",
    },
  ];

  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="text-white py-10 px-4 md:px-12 bg-[#0d0d0d]">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Best Sellers
        </h1>
        <button className="bg-teal-500 hover:bg-teal-600 transition-colors text-white px-5 py-2 rounded-full font-bold text-sm sm:text-base shadow-md">
          See All Items
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-[#1a1a1a] rounded-2xl p-4 shadow-lg hover:shadow-teal-600/40 transition-shadow"
          >
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
              />

              {/* Wishlist Icon */}
              <div
                className="absolute top-3 right-3 bg-white/10 p-2 rounded-full backdrop-blur-sm shadow-md cursor-pointer"
                onClick={() => toggleWishlist(product.id)}
              >
                {wishlist[product.id] ? (
                  <FavoriteIcon
                    className="text-red-500"
                    style={{ fontSize: "26px" }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    className="text-red-500"
                    style={{ fontSize: "26px" }}
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
                  ({product.reviews} Reviews)
                </span>
              </div>
              <p className="text-xl font-bold text-teal-400 mt-1">
                {product.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default HomeBestSellerProduct;
