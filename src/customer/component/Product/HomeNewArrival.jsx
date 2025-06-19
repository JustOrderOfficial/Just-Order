import React, { useState } from "react";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const products = [
  {
    id: 1,
    name: "Black T-Shirt",
    price: "₹145.00",
    rating: "★★★★★",
    reviews: 196,
    image: "./assets/images/t_shirts/Black_Full_Tshirt.png",
  },
  {
    id: 2,
    name: "Black Hoodie",
    price: "₹135.00",
    rating: "★★★★★",
    reviews: 218,
    image: "./assets/images/t_shirts/BlackHoodie.png",
  },
  {
    id: 3,
    name: "Blue Hoodie",
    price: "₹185.00",
    rating: "★★★★★",
    reviews: 165,
    image: "./assets/images/t_shirts/BlueHoodie.png",
  },
  {
    id: 4,
    name: "Black T-Shirt",
    price: "₹175.00",
    rating: "★★★★★",
    reviews: 238,
    image: "./assets/images/t_shirts/Black_Full_Tshirt.png",
  },
];

const NewArrival = () => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="">
      <div className="text-white py-8 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-wide">
            New Arrivals
          </h1>
          <button className="bg-teal-500 hover:bg-teal-600 transition-colors duration-300 px-6 py-2 rounded-full font-semibold shadow-lg">
            See All Items
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="relative bg-[#0f0f0f] bg-opacity-50 border border-teal-600 rounded-3xl shadow-lg flex flex-col sm:flex-row overflow-hidden"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full sm:w-56 object-cover rounded-l-3xl transition-transform duration-300 hover:scale-105"
              />

              {/* Info Section */}
              <div className="flex flex-col justify-between p-6 flex-1 relative">
                {/* Wishlist Icon */}
                <div
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 cursor-pointer rounded-full p-2 bg-teal-900/50 hover:bg-teal-800 transition-colors duration-300"
                >
                  {wishlist[product.id] ? (
                    <FavoriteIcon
                      className="text-teal-400"
                      style={{ fontSize: 32 }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      className="text-teal-400"
                      style={{ fontSize: 32 }}
                    />
                  )}
                </div>

                {/* Name & Rating */}
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    {product.name}
                  </h2>
                  <p className="flex items-center space-x-2 mb-4">
                    <span className="text-yellow-400 text-xl">
                      {product.rating}
                    </span>
                    <span className="text-gray-400 text-sm">
                      ({product.reviews} Reviews)
                    </span>
                  </p>
                </div>

                {/* Price */}
                <p className="text-3xl font-bold text-teal-400">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
