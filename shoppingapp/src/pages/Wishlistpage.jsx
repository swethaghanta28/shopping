import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const WishlistPage = () => {
  const location = useLocation();
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    if (location.state?.wishlistItems) {
      setWishlistItems(location.state.wishlistItems);
    } else {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
      setWishlistItems(storedWishlist);
    }
  }, [location.state]);

  return (
    <div className="wishlist-page">
      <h1>Your Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <div className="wishlist-container">
          {wishlistItems.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.image} alt={item.title} className="wishlist-img" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No items in the wishlist. Please add products to your wishlist.</p>
      )}
    </div>
  );
};

export default WishlistPage;
