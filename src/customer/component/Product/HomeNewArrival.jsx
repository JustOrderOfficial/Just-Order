
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import StarIcon from "@mui/icons-material/Star";

const NewArrival = () => {
  const products = [
    {
      id: 1,
      name: "Black T-Shirt",
      price: "₹145.00",
      rating: "★★★★★",
      reviews: 196,
      image: "./assets/images/t_shirts/Black_Full_Tshirt.png", // Replace with actual image path
    },
    {
      id: 2,
      name: "Black Hoodie",
      price: "₹135.00",
      rating: "★★★★★",
      reviews: 218,
      image: "./assets/images/t_shirts/BlackHoodie.png", // Replace with actual image path
    },
    {
      id: 3,
      name: "Blue Hoodie",
      price: "₹185.00",
      rating: "★★★★★",
      reviews: 165,
      image: "./assets/images/t_shirts/BlueHoodie.png", // Replace with actual image path
    },
    {
      id: 4,
      name: "Black T-Shirt",
      price: "₹175.00",
      rating: "★★★★★",
      reviews: 238,
      image: "./assets/images/t_shirts/Black_Full_Tshirt.png", // Replace with actual image path
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
    <div className="text-white py-8 px-2">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">New Arrivals</h1>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold hover:bg-orange-600 transition">
          See All Items
        </button>
      </div>

      {/* Items Section */}
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="w-1/2 mb-8">
            <div className="flex mr-4 bg-[#FFFFFF2E] border rounded-3xl relative overflow-hidden">
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-auto h-72 object-cover p-4 rounded-3xl hover:scale-105 transition-transform duration-300"
              />


              {/* Product Info */}
              <div className="flex justify-between">
                <div className="top-6 py-2">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-sm">
                    <span className="text-yellow-400 text-lg">{product.rating}</span>
                    <span className="text-gray-400">({product.reviews}Reviews)</span>
                  </p>
                  {/* <p className="text-2xl font-semibold mt-2">{product.price}</p> */}
                </div>
                {/* Wishlist Icon */}
                <div
                  className="absolute top-4 right-4 rounded-full p-2 cursor-pointer"
                  onClick={() => toggleWishlist(product.id)}
                >
                  {wishlist[product.id] ? (
                    <FavoriteIcon className="text-orange-500 "
                      style={{ fontSize: "30px" }} />
                  ) : (
                    <FavoriteBorderIcon className="text-orange-500"
                      style={{ fontSize: "30px" }} />
                  )}
                </div>

                {/* Product Price */}

                <div className="absolute right-39 bottom-6">
                  <p className="text-2xl font-semibold">{product.price}</p>
                </div>


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
