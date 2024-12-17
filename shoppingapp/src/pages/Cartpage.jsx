import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import "./CartPage.css";

const Cartpage = () => {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from location state or localStorage
  useEffect(() => {
    if (location.state?.cartItems) {
      setCartItems(location.state.cartItems);
    } else {
      const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartItems(storedCart);
    }
  }, [location.state]);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cart-container">
          {cartItems.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt={item.title} className="cart-img" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No items in the cart. Please add products to your cart.</p>
      )}
    </div>
  );
};

export default Cartpage;
