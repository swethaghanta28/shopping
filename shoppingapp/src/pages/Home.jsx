import React from 'react';
import Banner from '../components/Banner'; 
import { Link } from 'react-router-dom';
import '../pages/Home.css'; 

const Home = () => {
  return (
    <div className="home-page">
          <h1>Welcome to Our Store</h1>
      <p>Discover the latest fashion trends, beauty products, and more!</p>

      <Banner /> 

      <div className="special-offers">
        <h2>Special Offers</h2>

        <div className="offer-container">
          <div className="offer-card">
            <img src="assets/womenimages/image1saree.png" alt="Women’s Offer" className="offer-img"  />
            <h5>Exclusive Women’s Fashion</h5>
            <p>Shop the latest fashion trends for women with special discounts!</p>
            <Link to="/women" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/womenimages/image2westren.png" alt="Women’s Offer" className="offer-img" />
            <h5>Exclusive Women’s Fashion</h5>
            <p>Shop the latest fashion trends for women with special discounts!</p>
            <Link to="/women" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/womenimages/image3tshirt.png" alt="Women’s Offer" className="offer-img" />
            <h5>Exclusive Women’s Fashion</h5>
            <p>Shop the latest fashion trends for women with special discounts!</p>
            <Link to="/women" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/womenimages/image4kurthis.png" alt="Women’s Offer" className="offer-img" />
            <h5>Exclusive Women’s Fashion</h5>
            <p>Shop the latest fashion trends for women with special discounts!</p>
            <Link to="/women" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/menimages/menimage1.png" alt="Men’s Offer" className="offer-img" />
            <h5>Men’s Fashion Deals</h5>
            <p>Exclusive offers on the latest men’s clothing and accessories.</p>
            <Link to="/men" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/menimages/menimage2.png" alt="Men’s Offer" className="offer-img" />
            <h5>Men’s Fashion Deals</h5>
            <p>Exclusive offers on the latest men’s clothing and accessories.</p>
            <Link to="/men" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/menimages/menimage3.png" alt="Men’s Offer" className="offer-img" />
            <h5>Men’s Fashion Deals</h5>
            <p>Exclusive offers on the latest men’s clothing and accessories.</p>
            <Link to="/men" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/menimages/menimage4.png" alt="Men’s Offer" className="offer-img" />
            <h5>Men’s Fashion Deals</h5>
            <p>Exclusive offers on the latest men’s clothing and accessories.</p>
            <Link to="/men" className="btn btn-outline-success">Shop Now</Link>
          </div>

          <div className="offer-card">
            <img src="assets/kidsimages/kidsimage1.png" alt="Kids’ Offer" className="offer-img" />
            <h5>Stylish Kids’ Apparel</h5>
            <p>Get amazing discounts on kids’ fashion and toys.</p>
            <Link to="/kids" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/kidsimages/kidsimage2.png" alt="Kids’ Offer" className="offer-img" />
            <h5>Stylish Kids’ Apparel</h5>
            <p>Get amazing discounts on kids’ fashion and toys.</p>
            <Link to="/kids" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/kidsimages/kidsimage3.png" alt="Kids’ Offer" className="offer-img" />
            <h5>Stylish Kids’ Apparel</h5>
            <p>Get amazing discounts on kids’ fashion and toys.</p>
            <Link to="/kids" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/kidsimages/kidsimage4.png" alt="Kids’ Offer" className="offer-img" />
            <h5>Stylish Kids’ Apparel</h5>
            <p>Get amazing discounts on kids’ fashion and toys.</p>
            <Link to="/kids" className="btn btn-outline-success">Shop Now</Link>
          </div>

          <div className="offer-card">
            <img src="assets/beautyproducts/beautyimages1.png" alt="Beauty Offer" className="offer-img" />
            <h5>Beauty & Skincare Offers</h5>
            <p>Shop top beauty products with exclusive discounts.</p>
            <Link to="/beauty" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/beautyproducts/beautyimages2.png" alt="Beauty Offer" className="offer-img" />
            <h5>Beauty & Skincare Offers</h5>
            <p>Shop top beauty products with exclusive discounts.</p>
            <Link to="/beauty" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/beautyproducts/beautyimages3.png" alt="Beauty Offer" className="offer-img" />
            <h5>Beauty & Skincare Offers</h5>
            <p>Shop top beauty products with exclusive discounts.</p>
            <Link to="/beauty" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/beautyproducts/beautyimages4.png" alt="Beauty Offer" className="offer-img" />
            <h5>Beauty & Skincare Offers</h5>
            <p>Shop top beauty products with exclusive discounts.</p>
            <Link to="/beauty" className="btn btn-outline-success">Shop Now</Link>
          </div>

          <div className="offer-card">
            <img src="assets/jewelleryimages/jewelleryimages1.png" alt="Jewellery Offer" className="offer-img" />
            <h5>Elegant Jewellery Deals</h5>
            <p>Get stunning discounts on beautiful jewellery pieces.</p>
            <Link to="/jewellery" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/jewelleryimages/jewelleryimages2.png" alt="Jewellery Offer" className="offer-img" />
            <h5>Elegant Jewellery Deals</h5>
            <p>Get stunning discounts on beautiful jewellery pieces.</p>
            <Link to="/jewellery" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/jewelleryimages/jewelleryimages3.png" alt="Jewellery Offer" className="offer-img" />
            <h5>Elegant Jewellery Deals</h5>
            <p>Get stunning discounts on beautiful jewellery pieces.</p>
            <Link to="/jewellery" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/jewelleryimages/jewelleryimages4.png" alt="Jewellery Offer" className="offer-img" />
            <h5>Elegant Jewellery Deals</h5>
            <p>Get stunning discounts on beautiful jewellery pieces.</p>
            <Link to="/jewellery" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/footwearimages/footwearimage1.png" alt="Footwear Offer" className="offer-img" />
            <h5>Exclusive Footwear Offers</h5>
            <p>Find the best deals on stylish shoes and sandals.</p>
            <Link to="/footwear" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/footwearimages/footwearimage2.png" alt="Footwear Offer" className="offer-img" />
            <h5>Exclusive Footwear Offers</h5>
            <p>Find the best deals on stylish shoes and sandals.</p>
            <Link to="/footwear" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/footwearimages/footwearimage3.png" alt="Footwear Offer" className="offer-img" />
            <h5>Exclusive Footwear Offers</h5>
            <p>Find the best deals on stylish shoes and sandals.</p>
            <Link to="/footwear" className="btn btn-outline-success">Shop Now</Link>
          </div>
          <div className="offer-card">
            <img src="assets/footwearimages/footwearimage4.png" alt="Footwear Offer" className="offer-img" />
            <h5>Exclusive Footwear Offers</h5>
            <p>Find the best deals on stylish shoes and sandals.</p>
            <Link to="/footwear" className="btn btn-outline-success">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
