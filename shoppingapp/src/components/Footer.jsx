import React from "react";
import "../pages/Home.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-subscribe">
        <h3>JOIN US FOR 10% OFF</h3>
        <form>
          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            className="footer-input"
          />
          <button type="submit" className="footer-button">
            JOIN
          </button>
        </form>
        <div className="footer-checkbox">
          <label >
            I consent to receive promotional communications related to my
            purchase history, website browsing activity, and/or engagement with
            marketing materials.
          
          </label>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <a href="/returns">Returns</a>
          <a href="/unidays">UNiDAYS</a>
          <a href="/brands">Brands</a>
          <a href="/klarna">Klarna</a>
        </div>
        <div>
          <a href="/shipping">Shipping</a>
          <a href="/contact">Contact Us</a>
          <a href="/blog">Blog</a>
          <a href="/competitions">Competitions</a>
        </div>
        <div>
          <a href="/size-guide">Size Guide</a>
          <a href="/faq">FAQ</a>
          <a href="/about">About Us</a>
          <a href="/careers">Careers</a>
        </div>
        <div>
          <a href="/gift-card">Gift Card</a>
          <a href="/reviews">Reviews</a>
          <a href="/afterpay">Afterpay</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>

      <div className="footer-terms">
        <a href="/terms-conditions">Terms & Conditions</a>
      </div>

     
    </footer>
  );
};

export default Footer;
