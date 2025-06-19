import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    toast.success("Removed from cart");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className="bg-gradient-to-br from-[#0f0f0f]/80 via-[#1a1a1a]/80 to-[#141414]/80 backdrop-blur-md min-h-screen text-white py-12 px-4 sm:px-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 border-b border-gray-700 pb-4">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-400">
          <p className="text-lg">Your cart is empty.</p>
          <Link
            to="/"
            className="mt-4 inline-block bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-full font-medium text-white transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between bg-white/5 p-5 rounded-2xl shadow-md border border-gray-700"
            >
              <div className="flex items-center gap-5 w-full sm:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl border border-gray-600"
                />
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-400">
                    Size: <span className="text-white">{item.size}</span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Quantity: <span className="text-white">{item.count}</span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Price: ₹{item.price * item.count}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleRemove(index)}
                className="mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center border-t border-gray-700 pt-6">
            <h2 className="text-2xl font-bold">Total: ₹{totalPrice}</h2>
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold text-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
