import React from "react";
import "./Kids.css"; 
import { Link } from "react-router-dom";

const offers = [
  {
    img: "assets/kidsimages/kidsimage1.png",
    title: "Boys' Classic T-Shirt",
    description: "Comfortable and stylish t-shirt for boys of all ages.",
    price: "$19.99",
  }, 
  {
    img: "assets/kidsimages/kidsimage2.png",
    title: "Girls' Floral Dress",
    description: "Perfect for summer days, this floral dress is a must-have.",
    price: "$29.99",
  },
  {
    img: "assets/kidsimages/kidsimage3.png",
    title: "Boys' Denim Shorts",
    description: "Durable and fashionable denim shorts for active boys.",
    price: "$24.99",
  },
  {
    img: "assets/kidsimages/kidsimage4.png",
    title: "Girls' Pink Sneakers",
    description: "Trendy pink sneakers for a playful look.",
    price: "$34.99",
  },
  {
    img: "assets/kidsimages/kidsimage5.png",
    title: "Boys' Hoodie",
    description: "A cozy hoodie to keep boys warm in any season.",
    price: "$39.99",
  },
  {
    img: "assets/kidsimages/kidsimage6.png",
    title: "Girls' Winter Coat",
    description: "Stylish and warm coat for girls in cold weather.",
    price: "$49.99",
  },
  {
    img: "assets/kidsimages/kidsimage7.png",
    title: "Boys' Soccer Shoes",
    description: "Perfect shoes for young soccer enthusiasts.",
    price: "$44.99",
  },
  {
    img: "assets/kidsimages/kidsimage8.png",
    title: "Girls' Rain Boots",
    description: "Bright and colorful rain boots for rainy days.",
    price: "$29.99",
  },
  {
    img: "assets/kidsimages/kidsimage9.png",
    title: "Boys' Backpack",
    description: "Spacious and durable backpack for school.",
    price: "$22.99",
  },
  {
    img: "assets/kidsimages/kidsimage10.png",
    title: "Girls' Headband Set",
    description: "Cute and stylish headbands for girls.",
    price: "$14.99",
  },
  {
    img: "assets/kidsimages/kidsimage11.png",
    title: "Girls' Headband Set",
    description: "Cute and stylish headbands for girls.",
    price: "$14.99",
  },
  {
    img: "assets/kidsimages/kidsimage12.png",
    title: "Girls' Headband Set",
    description: "Cute and stylish headbands for girls.",
    price: "$14.99",
  },
];

const Kidspage = () => {
  return (
    <div className="kids-page-wrapper">
      <div className="kids-text">
        <h1>Welcome to the Kids Collection</h1>
        <p>Explore our fun and stylish kids' clothing and accessories.</p>
      </div>

      <div className="kids-banner">
        <img
          src="kidsbannerimage.jpg"
          alt="Kids Collection Banner"
          className="banner-image"
        />
      </div>

      <div className="offer-container">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <img src={offer.img} alt={offer.title} className="offer-img" />
            <h5>{offer.title}</h5>
            <p>{offer.description}</p>
            <p className="price">
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

export default Kidspage;
