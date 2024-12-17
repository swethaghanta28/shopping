import React from "react";
import "./Jewellery.css"; 
import { Link } from "react-router-dom";

const offers = [
  {
    img: "assets/jewelleryimages/jewelleryimage1.png",
    title: "Exclusive Gold Necklace",
    description: "Discover our exquisite collection of gold necklaces for every occasion.",
    price: "$199.99",
  },
  {
    img: "assets/jewelleryimages/jewelleryimage2.png",
    title: "Diamond Earrings",
    description: "Shine bright with our stunning diamond earrings, crafted to perfection.",
    price: "$299.99",
  },
  {
    img: "assets/jewelleryimages/jewelleryimage3.png",
    title: "Luxury Bracelets",
    description: "Add elegance to your wrist with our luxury bracelets.",
    price: "$149.99",
  },
  {
    img: "assets/jewelleryimages/jewelleryimage4.png",
    title: "Sapphire Rings",
    description: "Find your perfect gemstone ring with our sapphire collection.",
    price: "$249.99",
  },
  {
    img: "assets/jewelleryimages/jewelleryimage5.png",
    title: "Pearl Necklaces",
    description: "Timeless elegance with our range of pearl necklaces.",
    price: "$129.99",
  },
  {
    img: "assets/jewelleryimages/jewelleryimage6.png",
    title: "Pearl Necklaces",
    description: "Timeless elegance with our range of pearl necklaces.",
    price: "$129.99",
  },
  {
    img: "assets/jewelleryimages/jewelleryimage7.png",
    title: "Pearl Necklaces",
    description: "Timeless elegance with our range of pearl necklaces.",
    price: "$129.99",
  },
  {
    img: "assets/jewelleryimages/jewelleryimage8.png",
    title: "Pearl Necklaces",
    description: "Timeless elegance with our range of pearl necklaces.",
    price: "$129.99",
  },
  {
    img: "assets/jewelleryimages/jewelleryimages1.png",
    title: "Pearl Necklaces",
    description: "Timeless elegance with our range of pearl necklaces.",
    price: "$129.99",
  },
  {
    img: "assets/jewelleryimages/jewelleryimages2.png",
    title: "Pearl Necklaces",
    description: "Timeless elegance with our range of pearl necklaces.",
    price: "$129.99",
  },
  {
    img: "assets/jewelleryimages/jewelleryimages3.png",
    title: "Pearl Necklaces",
    description: "Timeless elegance with our range of pearl necklaces.",
    price: "$129.99",
  },
  {
    img: "assets/jewelleryimages/jewelleryimages4.png",
    title: "Pearl Necklaces",
    description: "Timeless elegance with our range of pearl necklaces.",
    price: "$129.99",
  },
];

const Jewellerypage = () => {
  return (
    <div className="jewellery-page-wrapper">
      <div className="jewellery-text">
        <h1>Welcome to the Jewellery Collection</h1>
        <p>Explore our luxurious jewellery pieces perfect for any occasion.</p>
      </div>

      <div className="jewellery-banner">
        <img
          src="jewelleryimage.png"
          alt="Jewellery Collection Banner"
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

export default Jewellerypage;
