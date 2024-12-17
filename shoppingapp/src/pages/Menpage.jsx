import React from "react";
import "./Men.css";
import { Link } from "react-router-dom";

const offers = [
  {
    img: "assets/menimages/image1blackmen.png",
    title: "Exclusive Men’s Fashion",
    description: "Shop the latest fashion trends for men with special discounts!",
    price: "$49.99",
  },
  {
    img: "assets/menimages/image2blackmen.png",
    title: "Exclusive Men’s Footwear",
    description: "Discover trendy and comfortable footwear for every occasion.",
  },
  {
    img: "assets/menimages/image3blackmen.png",
    title: "Exclusive Men’s Accessories",
    description: "Enhance your style with our premium accessories.",
  },
  {
    img: "assets/menimages/image4blackmen.png",
    title: "Men’s Sportswear",
    description: "Stay active with stylish and functional sportswear.",
  },
  {
    img: "assets/menimages/image5blackmen.png",
    title: "Men’s Casual Wear",
    description: "Find the perfect outfit for a relaxed weekend.",
  },
  {
    img: "assets/menimages/image6blackmen.png",
    title: "Men’s Ethnic Wear",
    description: "Celebrate in style with our exclusive ethnic collection.",
  },
  {
    img: "assets/menimages/image7blackmen.png",
    title: "Men’s Winter Collection",
    description: "Keep warm with our fashionable winter essentials.",
  },
  {
    img: "assets/menimages/image8blackmen.png",
    title: "Men’s Party Wear",
    description: "Shine bright at every celebration with our party wear.",
  },
  {
    img: "assets/menimages/menimage1.png",
    title: "Men’s Formal Wear",
    description: "Elevate your work wardrobe with premium formal wear.",
  },
  {
    img: "assets/menimages/menimage2.png",
    title: "Men’s Beachwear",
    description: "Enjoy your vacation with our trendy beachwear.",
  },
  {
    img: "assets/menimages/menimage3.png",
    title: "Men’s Beachwear",
    description: "Enjoy your vacation with our trendy beachwear.",
  },
  {
    img: "assets/menimages/menimage4.png",
    title: "Men’s Beachwear",
    description: "Enjoy your vacation with our trendy beachwear.",
  },
];

const MenPage = () => {
  return (
    <div className="men-page">
      <div className="men-text">
        <h1>Welcome to the Men's Section</h1>
        <p>
          Explore our collection of elegant Western and Ethnic wear. Find the
          perfect outfit for every occasion!
        </p>
      </div>

      <div className="men-banner">
        <img
          src="bannerimagemen.png"
          alt="Men's Section Banner"
          className="banner-image"
        />
      </div>

      <div className="offer-container">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <img src={offer.img} alt={offer.title} className="offer-img" />
            <h5>{offer.title}</h5>
            <p>{offer.description}</p>
            <p className="price">Price: <strong>{offer.price}</strong></p>

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

export default MenPage;
