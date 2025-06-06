import React, { useState } from "react";
// import { AppBar, Toolbar, Select, MenuItem } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import CollectionCard from "../../component/collectionCarosal/CollectionCard.jsx";

const products = [
  { id: 1, name: "Ramy Coat", price: "₹115.00", reviews: "971", image: "/assets/images/t_shirts/Black_Full_Tshirt.png" },
  { id: 2, name: "Vayo Sweater", price: "₹105.00", reviews: "1k", image: "/assets/images/t_shirts/BlueHoodie.png" },
  { id: 3, name: "Baro Leather Jacket", price: "₹125.00", reviews: "1k", image: "/assets/images/t_shirts/BlackHoodie.png" },
  { id: 4, name: "Emy Blue Blazer", price: "₹105.00", reviews: "1k", image: "/assets/images/t_shirts/Black_Full_Tshirt.png" },
  { id: 5, name: "Ramy Coat", price: "₹115.00", reviews: "971", image: "/assets/images/t_shirts/Black_Full_Tshirt.png" },
  { id: 6, name: "Vayo Sweater", price: "₹105.00", reviews: "1k", image: "/assets/images/t_shirts/BlueHoodie.png" },
  { id: 7, name: "Baro Leather Jacket", price: "₹125.00", reviews: "1k", image: "/assets/images/t_shirts/BlackHoodie.png" },
  { id: 8, name: "Emy Blue Blazer", price: "₹105.00", reviews: "1k", image: "/assets/images/t_shirts/Black_Full_Tshirt.png" },
  { id: 9, name: "Ramy Coat", price: "₹115.00", reviews: "971", image: "/assets/images/t_shirts/Black_Full_Tshirt.png" },
  { id: 10, name: "Vayo Sweater", price: "₹105.00", reviews: "1k", image: "/assets/images/t_shirts/BlueHoodie.png" },
  { id: 11, name: "Baro Leather Jacket", price: "₹125.00", reviews: "1k", image: "/assets/images/t_shirts/BlackHoodie.png" },
  { id: 12, name: "Emy Blue Blazer", price: "₹105.00", reviews: "1k", image: "/assets/images/t_shirts/Black_Full_Tshirt.png" },
];

const ProductGrid = () => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="text-white  px-2">
      <section className="w-full max-w-[1440px] mx-auto px-4">
        <CollectionCard />
      </section>

      {/* Header */}
      <div className="w-full pt-16 flex gap-6 ml-6 ">
        {/* Filter Label */}
        <div className="text-white text-xl font-semibold ml-20">Filter</div>

        {/* Dropdown Menus */}
        <div className="gap-4 ">
          <select
            className="pr-16 pl-2 py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border  text-white rounded-lg hover:bg-orange-500"
          >
            <option value="" className="text-left">T-Shirts</option>
            <option value="category1" className="text-left ">Hoodie</option>
            <option value="category2">Sweatshirt</option>
          </select>
        </div>

        {/* Price Dropdown */}
        <div className="">
            <select
              className="pr-16 pl-2 text-white py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100  rounded-lg focus:outline hover:bg-orange-500"
            >
              <option value="">Price</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>

        {/* Sort By Dropdown */}
        <div className="ml-auto mr-28">
          <select
            className="pr-16 pl-2 text-white py-2 bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 rounded-lg focus:outline hover:bg-orange-500"
          >
            <option value="">Sort By</option>
            <option value="rating">Rating</option>
            <option value="popularity">Popularity</option>
            <option value="Best Seller">Best Seller</option>
            <option value="New Arrival">New Arrival</option>
          </select>
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr className="my-4 mx-20 border-gray-300" />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-8 px-6 gap-4 mx-16">
        {products.map((product) => (
          <div key={product.id} className="relative">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-3xl transform hover:scale-105 transition-transform duration-300"
            />

            {/* Wishlist Icon */}
            <div className="absolute top-1 right-4">
              <div
                className="rounded-full py-2 cursor-pointer"
                onClick={() => toggleWishlist(product.id)}
              >
                {wishlist[product.id] ? (
                  <FavoriteIcon className="text-orange-500 text-xl" style={{ fontSize: "30px" }} />
                ) : (
                  <FavoriteBorderIcon className="text-orange-500 text-xl" style={{ fontSize: "30px" }} />
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <h2 className="flex ml-2 text-xl font-semibold">{product.name}</h2>
              <div className="flex ml-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} fontSize="small" />
                ))}
                <span className="text-gray-400 text-sm ">
                  ({product.reviews} Reviews)
                </span>
              </div>
              <p className="flex ml-3 text-xl font-bold mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default ProductGrid;
