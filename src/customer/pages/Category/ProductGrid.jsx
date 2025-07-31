import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import CollectionCard from "../../component/collectionCarosal/CollectionCard.jsx";
import { motion } from "framer-motion";
import products from "../../../assets/data/products";
import { ChevronDown } from "lucide-react";

const ProductGrid = () => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = [...new Set(products.map((p) => p.category))];
  const sizes = [...new Set(products.flatMap((p) => p.sizes || []))];
  const genders = [...new Set(products.map((p) => p.gender))];
  const tags = [...new Set(products.flatMap((p) => p.tags || []))];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white px-6 py-10">
      {/* Hero Collection Card */}
      <section className="w-full max-w-[1440px] mx-auto px-4">
        <CollectionCard />
      </section>

      {/* Filter Bar */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 items-start lg:items-center bg-[#1a1a1a]/60 backdrop-blur-lg border border-[#2e2e2e] rounded-xl p-5 mt-12 mb-8 shadow-[0_0_12px_#1f1f1f]">
        <span className="text-lg sm:text-xl font-semibold tracking-wide text-white/90">
          Filters
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex gap-4 w-full lg:w-auto">
          {[
            { label: "Category", options: categories },
            { label: "Size", options: sizes },
            { label: "Gender", options: genders },
            { label: "Tags", options: tags },
            {
              label: "Sort By",
              options: [
                "Price: Low to High",
                "Price: High to Low",
                "Rating",
                "Newest",
              ],
            },
          ].map((filter, idx) => (
            <div key={idx} className="relative w-full sm:w-auto">
              <select
                className="bg-[#111]/90 text-white px-4 py-2 text-sm rounded-md border border-[#333]
             hover:border-orange-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500
             transition-all duration-200 shadow-md outline-none w-full appearance-none lg:pr-10"
              >
                <option value="">{filter.label}</option>
                {filter.options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>

              <ChevronDown
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="group relative bg-[#151515] rounded-2xl border border-[#2a2a2a] overflow-hidden shadow-[0_0_12px_#ff7a0020] hover:shadow-[0_0_20px_#ff7a00aa] transition duration-300"
            >
              {/* Wishlist Icon */}
              <div
                className="absolute top-3 right-3 z-10 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  toggleWishlist(product.id);
                }}
              >
                {wishlist[product.id] ? (
                  <FavoriteIcon className="text-orange-500" />
                ) : (
                  <FavoriteBorderIcon className="text-orange-500" />
                )}
              </div>

              {/* Product Image */}
              <div className="bg-[#101010] p-3">
                <img
                  src={product.image || product.images?.[0]}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover sm:object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-1">
                <h2 className="text-sm sm:text-base md:text-lg font-medium tracking-wide line-clamp-2">
                  {product.name}
                </h2>
                <div className="flex items-center text-orange-400 text-xs sm:text-sm">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} fontSize="inherit" />
                  ))}
                  <span className="ml-2 text-gray-400 text-xs sm:text-sm">
                    ({product.reviews})
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-bold">₹{product.price}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductGrid;
