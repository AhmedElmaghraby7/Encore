import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(stored);
  }, []);

  const removeFromCart = (indexToRemove) => {
    toast.success(`${cartItems[indexToRemove].name} removed from cart 🗑`);
    const updated = cartItems.filter((_, i) => i !== indexToRemove);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));    
  };
  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem("cart",JSON.stringify([]));
    toast.success(`all items removed from cart 🗑`);
  };
  return (
    <div className="max-w-4xl mx-auto p-6 flex-1 py-20 ">
      <h1 className="text-3xl font-bold mb-6">Your Cart 🛒 </h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>No items in cart</p>          <br />
        </div>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 border rounded-lg shadow"
              >
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <button
                  className="cursor-pointer bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded duration-300 hover:px-8"
                  onClick={() => removeFromCart(index)}
                >
                  Remove <i className="fa-solid fa-trash text-red-500"></i>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <div className="mt-4 font-bold text-xl text-green-600">
              Total:{" "}
              ${cartItems.reduce((total, item) => total + item.price, 0)}
            </div>
            <button
              className="mt-2 cursor-pointer bg-red-500 hover:bg-red-700 text-white px-4 py-2 mx-4 rounded duration-300 hover:px-8"
              onClick={clearCart}
            >
              Clear Cart <i className="fa-solid fa-trash text-gray-100"></i>
            </button>
          </div>

        </>
      )}
      <div className="mt-6 text-center">
        <Link to="/shop" className="duration-300 hover:px-8 text-gray-50 bg-blue-500 hover:bg-blue-700 rounded py-3 px-5">
        <i className="fa-solid fa-arrow-left"></i><span className="text-xl"> Back to shop</span> 
        </Link>
      </div>
    </div>
  );
};

export default Cart;
