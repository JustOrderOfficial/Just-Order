import React, { useState } from "react";
import products from "../../../assets/data/products";
import { Link } from "react-router-dom";
import { Trash2, Eye, HeartOff } from "lucide-react";
import toast from "react-hot-toast";

const Favourite = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const handleRemove = (id) => {
    const updated = favorites.filter((item) => item !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    toast.success("Removed from favorites");
  };

  const handleClearAll = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");
    toast("Cleared all favorites");
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      count: 1,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Added to cart");
  };

  const favProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white px-4 sm:px-8 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Saved Items
        </h2>
        {favProducts.length > 0 && (
          <button
            onClick={handleClearAll}
            className="flex items-center gap-2 text-sm text-red-400 hover:underline transition"
          >
            <Trash2 size={16} />
            Clear All
          </button>
        )}
      </div>

      {/* Empty State */}
      {favProducts.length === 0 ? (
        <div className="text-center text-gray-400 mt-32">
          <HeartOff size={42} className="mx-auto mb-4 text-gray-500" />
          <p className="text-xl font-semibold">No items in your wishlist</p>
          <p className="text-sm text-gray-500 mt-2">
            Browse products and click the heart icon to save your favorites.
          </p>
        </div>
      ) : (
        // Product Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {favProducts.map((product) => {
            const discountedPrice = product.discount
              ? product.price -
                Math.floor((product.price * product.discount) / 100)
              : product.price;

            return (
              <div
                key={product.id}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden flex flex-col shadow-sm hover:shadow-md transition"
              >
                <Link to={`/product/${product.id}`} className="relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                  {!product.inStock && (
                    <span className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-0.5 rounded text-white">
                      Out of Stock
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="absolute top-2 right-2 bg-orange-600 text-xs px-2 py-0.5 rounded text-white">
                      {product.discount}% OFF
                    </span>
                  )}
                </Link>

                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div className="space-y-1 mb-4">
                    <h3 className="text-white font-medium text-base leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-500 font-semibold">
                        ₹{discountedPrice}
                      </span>
                      {product.discount > 0 && (
                        <span className="line-through text-gray-500 text-sm">
                          ₹{product.price}
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-sm ${
                        product.inStock ? "text-green-400" : "text-red-500"
                      }`}
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-white text-black text-sm px-4 py-1.5 rounded-full font-medium hover:bg-gray-100 transition"
                    >
                      Add to Cart
                    </button>
                    <div className="flex gap-3">
                      <Link
                        to={`/product/${product.id}`}
                        className="text-gray-400 hover:text-white"
                      >
                        <Eye size={18} />
                      </Link>
                      <button
                        onClick={() => handleRemove(product.id)}
                        className="text-red-400 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Favourite;
