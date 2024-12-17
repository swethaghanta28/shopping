import React from "react";
import { Link } from "react-router-dom";
import "./WomenPage.css";

const womenOffers = [
  {
    id: 1,
    image: "assets/womenimages/image1saree.png",
    title: "Exclusive Women’s Fashion",
    description: "Shop the latest fashion trends for women with special discounts!",
    cartLink: "/cart",
    wishlistLink: "/whishlist",
  },
  {
    id: 2,
    image: "assets/womenimages/image2westren.png",
    title: "Exclusive Women’s Fashion",
    description: "Shop the latest fashion trends for women with special discounts!",
    cartLink: "/cart",
    wishlistLink: "/whishlist",
  },
  {
    id: 3,
    image: "assets/womenimages/image3tshirt.png",
    title: "Exclusive Women’s Fashion",
    description: "Shop the latest fashion trends for women with special discounts!",
    cartLink: "/cart",
    wishlistLink: "/whishlist",
  },
  {
    id: 4,
    image: "assets/womenimages/image4kurthis.png",
    title: "Exclusive Women’s Fashion",
    description: "Shop the latest fashion trends for women with special discounts!",
    cartLink: "/cart",
    wishlistLink: "/whishlist",
  },
  {
    id: 5,
    image: "assets/womenimages/image1bluewomen.png",
    title: "Exclusive Women’s Fashion",
    description: "Shop the latest fashion trends for women with special discounts!",
    cartLink: "/cart",
    wishlistLink: "/whishlist",
  },
  {
    id: 6,
    image: "assets/womenimages/image2bluewomen.png",
    title: "Exclusive Women’s Fashion",
    description: "Shop the latest fashion trends for women with special discounts!",
    cartLink: "/cart",
    wishlistLink: "/whishlist",
  },
  {
    id: 7,
    image: "assets/womenimages/image3bluewomen.png",
    title: "Exclusive Women’s Fashion",
    description: "Shop the latest fashion trends for women with special discounts!",
    cartLink: "/cart",
    wishlistLink: "/whishlist",
  },
  {
    id: 8,
    image: "assets/womenimages/image4bluewomen.png",
    title: "Exclusive Women’s Fashion",
    description: "Shop the latest fashion trends for women with special discounts!",
    cartLink: "/cart",
    wishlistLink: "/whishlist",
  },
  {
    id: 9,
    image: "assets/womenimages/image5bluewomen.png",
    title: "Exclusive Women’s Fashion",
    description: "Shop the latest fashion trends for women with special discounts!",
    cartLink: "/cart",
    wishlistLink: "/whishlist",
  },
  {
    id: 10,
    image: "assets/womenimages/image6bluewomen.png",
    title: "Exclusive Women’s Fashion",
    description: "Shop the latest fashion trends for women with special discounts!",
    cartLink: "/cart",
    wishlistLink: "/whishlist",
  },
  {
    id: 11,
    image: "assets/womenimages/image7bluewomen.png",
    title: "Exclusive Women’s Fashion",
    description: "Shop the latest fashion trends for women with special discounts!",
    cartLink: "/cart",
    wishlistLink: "/whishlist",
  },
  {
    id: 12,
    image: "assets/womenimages/image8bluewomen.png",
    title: "Exclusive Women’s Fashion",
    description: "Shop the latest fashion trends for women with special discounts!",
    cartLink: "/cart",
    wishlistLink: "/whishlist",
  },
];

const WomenPage = () => {
  return (
    <div className="women-page">
      <div className="women-text">
        <h1>Welcome to the Women's Section</h1>
        <p>
          Explore our collection of elegant Western and Ethnic wear. Find the
          perfect outfit for every occasion!
        </p>
      </div>

      <div className="women-banner">
        <img
          src="bannerimagewomen.png"
          alt="Women's Section Banner"
          className="banner-image"
        />
      </div>

      <div className="offer-container">
        {womenOffers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <img src={offer.image} alt="Women’s Offer" className="offer-img" />
            <h5>{offer.title}</h5>
            <p>{offer.description}</p>
            <Link to={offer.cartLink} className="btn btn-outline-success link-gap">
              Add to Cart
            </Link>
            <Link to={offer.wishlistLink} className="btn btn-outline-success">
              Wishlist
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenPage;
