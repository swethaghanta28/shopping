import React from "react";
import "./Footwear.css"; 
import { Link } from "react-router-dom";

const offers = [
  {
    img: "assets/footwearimages/footwearimage1.png",
    title: "Leather Sneakers",
    description: "Stylish and comfortable leather sneakers for everyday wear.",
    price: "$49.99",
  },
  {
    img: "assets/footwearimages/footwearimage2.png",
    title: "Sporty Running Shoes",
    description: "Durable running shoes perfect for workouts and running.",
    price: "$39.99",
  },
  {
    img: "assets/footwearimages/footwearimage3.png",
    title: "Casual Sandals",
    description: "Cool and breathable sandals for sunny days.",
    price: "$29.99",
  },
  {
    img: "assets/footwearimages/footwearimage4.png",
    title: "Formal Loafers",
    description: "Elegant loafers for formal occasions and office wear.",
    price: "$59.99",
  },
  {
    img: "assets/footwearimages/footwearimage5.png",
    title: "Flip Flops",
    description: "Simple and comfortable flip flops for beach days.",
    price: "$19.99",
  },
  {
    img: "assets/footwearimages/footwearimage6.png",
    title: "Boots",
    description: "Sturdy boots designed for winter and rugged use.",
    price: "$79.99",
  },
  {
    img: "assets/footwearimages/footwearimage7.png",
    title: "Boots",
    description: "Sturdy boots designed for winter and rugged use.",
    price: "$79.99",
  },
  {
    img: "assets/footwearimages/footwearimage8.png",
    title: "Boots",
    description: "Sturdy boots designed for winter and rugged use.",
    price: "$79.99",
  },
  {
    img: "assets/footwearimages/footwearimage9.png",
    title: "Boots",
    description: "Sturdy boots designed for winter and rugged use.",
    price: "$79.99",
  },
  {
    img: "assets/footwearimages/footwearimage10.png",
    title: "Boots",
    description: "Sturdy boots designed for winter and rugged use.",
    price: "$79.99",
  },
  {
    img: "assets/footwearimages/footwearimage11.png",
    title: "Boots",
    description: "Sturdy boots designed for winter and rugged use.",
    price: "$79.99",
  },
  {
    img: "assets/footwearimages/footwearimage12.png",
    title: "Boots",
    description: "Sturdy boots designed for winter and rugged use.",
    price: "$79.99",
  },
  
];

const FootwearPage = () => {
  return (
    <div className="footwear-page-container">
      <div className="footwear-page-text">
        <h1>Welcome to the Footwear Collection</h1>
        <p>Discover our wide range of footwear for all occasions.</p>
      </div>

      <div className="footwear-page-banner">
        <img
          src="footwearbanner.png"
          alt="Footwear Collection Banner"
          className="footwear-banner-image"
        />
      </div>

      <div className="footwear-page-offer-container">
        {offers.map((offer, index) => (
          <div className="footwear-page-offer-card" key={index}>
            <img src={offer.img} alt={offer.title} className="footwear-offer-img" />
            <h5>{offer.title}</h5>
            <p>{offer.description}</p>
            <p className="footwear-price">
              Price: <strong>{offer.price}</strong>
            </p>

            <Link to="/cart" className="btn btn-outline-success link-gap">
              Add to Cart
            </Link>
            <Link to="/wishlist" className="btn btn-outline-success">
              Wishlist
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootwearPage;
