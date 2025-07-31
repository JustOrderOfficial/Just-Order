
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

const Card = ({ filteredItems}) => {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex flex-row justify-center align-center flex-wrap gap-2  ">
      {filteredItems && filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border shadow-md h-auto w-[14rem] p-2 py-2 mt-1 flex flex-col justify-between"
          >
            
            {/* Image Section */}
            <div className="relative h-[12rem] w-[10rem] mx-auto mb-4">
              
              <div
                className="absolute -right-0.5 text-black p-1 rounded-full hover:bg-orange-500 transition duration-300 cursor-pointer"
                onClick={() => toggleWishlist(item.id)}
              >
                {wishlist[item.id] ? (
                  <FavoriteIcon className="text-color" />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </div>
              <Link to={`/shop/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-fill w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </Link>
                
                {/* Category Section */}
                <div className='absolute mt-2 -left-3'>
                <h1 className='text-gray-500 font-semibold'>{item.category}</h1>
                </div>
              {/* Ratings Section */}
              <div className="absolute top-2 mt-2 mx-4 -right-0.5 bg-orange-500 text-white flex items-center gap-1 px-2 py-1 text-sm rounded-lg shadow">
                <StarIcon style={{ fontSize: 16 }} />
                
                <span className="font-medium">{item.rating}</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-2">
              
              {/* Product Title */}
              <h4 className="text-lg text-orange-500 font-semibold truncate mt-3">{item.title}</h4>
              <div className="mt-2 flex flex-row items-center gap-2 text-sm">
                <p className="text-black font-semibold">₹{item.discountedPrice}</p>
                <p className="text-black line-through">₹{item.originalPrice}</p>
                <p className="text-xs text-white font-semibold bg-orange-500 rounded-full px-2 py-1 ml-2">
                  {item.discount}% OFF
                </p>
              </div>
            </div>

            {/* Buttons Section */}
            <div className=" flex justify-between items-center space-between">
              <button className="bg-gray-800 w-\[8rem\] md:w-auto text-white px-4 py-2 rounded-3xl hover:bg-orange-600 transition duration-300">
                Buy Now
              </button>
              <button className="bg-gray-800 w-\[8rem] md:w-auto  text-white px-3 py-2 rounded-3xl hover:bg-orange-500 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center col-span-4">
          No items to display.
        </p>
      )}
    </div>
  );
};

Card.defaultProps = {
  filteredItems: [],
};

export default Card;
