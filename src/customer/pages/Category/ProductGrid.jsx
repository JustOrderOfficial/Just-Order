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

  const filterClass = `bg-[#111]/90 text-white px-4 py-2 text-sm rounded-md border border-[#333]
  hover:border-orange-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500
  transition-all duration-200 shadow-md outline-none appearance-none relative w-44`;

  const selectWrapper = `relative`;

  const chevronIconStyle = `absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400`;


  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white px-6 py-10">
      <section className="w-full max-w-[1440px] mx-auto px-4">
        <CollectionCard />
      </section>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-between items-center bg-[#1a1a1a]/60 backdrop-blur-lg border border-[#2e2e2e] rounded-xl p-4 mt-12 mb-8 shadow-[0_0_12px_#1f1f1f]">
        <span className="text-lg font-semibold tracking-wide text-white/90">
          Filters
        </span>

        <div className="flex flex-wrap gap-4">
          {/* Category Filter */}
          <div className={selectWrapper}>
            <select className={filterClass}>
              <option value="">Category</option>
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <ChevronDown size={18} className={chevronIconStyle} />
          </div>

          {/* Size Filter */}
          <div className={selectWrapper}>
            <select className={filterClass}>
              <option value="">Size</option>
              {sizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
            <ChevronDown size={18} className={chevronIconStyle} />
          </div>

          {/* Gender Filter */}
          <div className={selectWrapper}>
            <select className={filterClass}>
              <option value="">Gender</option>
              {genders.map((gen) => (
                <option key={gen}>{gen}</option>
              ))}
            </select>
            <ChevronDown size={18} className={chevronIconStyle} />
          </div>

          {/* Tags Filter */}
          <div className={selectWrapper}>
            <select className={filterClass}>
              <option value="">Tags</option>
              {tags.map((tag) => (
                <option key={tag}>{tag}</option>
              ))}
            </select>
            <ChevronDown size={18} className={chevronIconStyle} />
          </div>

          {/* Sort Filter */}
          <div className={selectWrapper}>
            <select className={filterClass}>
              <option value="">Sort By</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="latest">Newest</option>
            </select>
            <ChevronDown size={18} className={chevronIconStyle} />
          </div>
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
            <div className="group relative bg-[#151515] rounded-2xl border border-[#2a2a2a] overflow-hidden shadow-[0_0_20px_#ff7a0020] hover:shadow-[0_0_35px_#ff7a00aa] transition duration-300">
              {/* Wishlist Icon */}
              <div
                className="absolute top-3 right-3 z-10 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault(); // prevent link trigger
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
              <img
                src={product.image || product.images?.[0]}
                alt={product.name}
                className="w-full h-60 object-contain p-4 bg-[#101010]"
              />

              {/* Product Info */}
              <div className="p-4 space-y-1">
                <h2 className="text-base font-medium tracking-wide">
                  {product.name}
                </h2>
                <div className="flex items-center text-orange-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} fontSize="small" />
                  ))}
                  <span className="ml-2 text-gray-400 text-xs">
                    ({product.reviews})
                  </span>
                </div>
                <p className="text-xl font-bold">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductGrid;
