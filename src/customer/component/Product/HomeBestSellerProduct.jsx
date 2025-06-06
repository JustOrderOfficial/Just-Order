
import React,{useState} from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

function HomeBestSellerProduct() {
  const products = [
    { id: 1, name: "Ramy Coat", price: "₹115.00", reviews: "971", image: "./assets/images/t_shirts/Black_Full_Tshirt.png" },
    { id: 2, name: "Vayo Sweater", price: "₹105.00", reviews: "1k", image: "./assets/images/t_shirts/BlueHoodie.png" },
    { id: 3, name: "Baro Leather Jacket", price: "₹125.00", reviews: "1k", image: "./assets/images/t_shirts/BlackHoodie.png" },
    { id: 4, name: "Emy Blue Blazer", price: "₹105.00", reviews: "1k", image: "./assets/images/t_shirts/Black_Full_Tshirt.png" },
  ];

  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className=" text-white py-8 px-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Best Sellers </h1>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold hover:bg-orange-600 transition">
          See All Items
        </button>
      </div>

      {/* Product Grid */}
      <div className="flex flex-col-1 flex-row gap-4">
        {products.map((product, index) => (
          <div key={product.id} className="relative">
            
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-3xl  hover:scale-105 transition-transform duration-300"
            />
               {/* Wishlist Icon */}
          <div className="absolute top-1 right-4">
            <div
              className=" rounded-full py-2 cursor-pointer"
              onClick={() => toggleWishlist(product.id)}
            >
              {wishlist[product.id] ? (
                <FavoriteIcon className="text-orange-500 text-xl" 
                style={{fontSize:"30px"}}/>
              ) : (
                <FavoriteBorderIcon className="text-orange-500 text-xl" 
                style={{fontSize:"30px"}}/>
              )}
            </div>
          </div>
         
            {/* Product Details */}
            <div className="mt-4">
              <h2 className="flex text-xl ml-2 font-semibold">{product.name}</h2>
              <div className="flex ml-2 text-yellow-400 ">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} fontSize="small" />
                ))}
                <span className="text-gray-400 text-sm">({product.reviews} Reviews)</span>
              </div>
              <p className="flex text-xl ml-3 font-bold mt-2">{product.price}</p>
            </div>

           
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeBestSellerProduct;
