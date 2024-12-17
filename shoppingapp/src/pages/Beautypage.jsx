import React from "react";
import "./Beauty.css"; 
import { Link } from "react-router-dom";

const offers = [
  {
    img: "assets/beautyproducts/beautyimages1.png",
    title: "Luxury Face Cream",
    description: "Nourishing cream that hydrates and rejuvenates your skin.",
    price: "$29.99",
  },
  {
    img: "assets/beautyproducts/beautyimages2.png",
    title: "Organic Lip Balm",
    description: "Natural lip balm for soft and moisturized lips.",
    price: "$9.99",
  },
  {
    img: "assets/beautyproducts/beautyimages3.png",
    title: "Perfumed Body Lotion",
    description: "Fragrant lotion to keep your skin smooth and scented.",
    price: "$19.99",
  },
  {
    img: "assets/beautyproducts/beautyimages4.png",
    title: "Anti-Aging Serum",
    description: "Reduce fine lines and wrinkles with this powerful serum.",
    price: "$49.99",
  },
  {
    img: "assets/beautyproducts/beautyimages5.png",
    title: "Moisturizing Hand Cream",
    description: "Hydrating hand cream for soft and smooth hands.",
    price: "$15.99",
  },
  {
    img: "assets/beautyproducts/beautyimages6.png",
    title: "Sunscreen SPF 50",
    description: "High protection sunscreen for all-day defense.",
    price: "$24.99",
  },
  {
    img: "assets/beautyproducts/beautyimages7.png",
    title: "Glow Mask",
    description: "A mask that brightens and illuminates your skin.",
    price: "$34.99",
  },
  {
    img: "assets/beautyproducts/beautyimages8.png",
    title: "Hydrating Face Mist",
    description: "Refreshing mist that hydrates and tones your skin.",
    price: "$19.99",
  },
  {
    img: "assets/beautyproducts/beautyimages9.png",
    title: "Eyebrow Gel",
    description: "Shape and define your brows with this easy-to-use gel.",
    price: "$12.99",
  },
  {
    img: "assets/beautyproducts/beautyimages10.png",
    title: "Nail Polish Set",
    description: "A beautiful collection of long-lasting nail colors.",
    price: "$22.99",
  },
  {
    img: "assets/beautyproducts/beautyimages11.png",
    title: "Nail Polish Set",
    description: "A beautiful collection of long-lasting nail colors.",
    price: "$22.99",
  },
  {
    img: "assets/beautyproducts/beautyimages12.png",
    title: "Nail Polish Set",
    description: "A beautiful collection of long-lasting nail colors.",
    price: "$22.99",
  },
];

const Beautypage = () => {
  return (
    <div className="beauty-page-container">
      <div className="beauty-page-text">
        <h1>Welcome to the Beauty Collection</h1>
        <p>Explore our luxurious beauty products for skincare and self-care.</p>
      </div>

      <div className="beauty-page-banner">
        <img
          src="beautyimagebanner.png"
          alt="Beauty Collection Banner"
          className="beauty-banner-image"
        />
      </div>

      <div className="beauty-page-offer-container">
        {offers.map((offer, index) => (
          <div className="beauty-page-offer-card" key={index}>
            <img src={offer.img} alt={offer.title} className="beauty-offer-img" />
            <h5>{offer.title}</h5>
            <p>{offer.description}</p>
            <p className="beauty-price">
              Price: <strong>{offer.price}</strong>
            </p>

            <Link to="/cart" className="btn btn-outline-success beauty-link-gap">
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

export default Beautypage;
