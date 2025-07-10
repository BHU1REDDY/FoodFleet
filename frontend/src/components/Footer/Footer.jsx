import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>
              Delicious meals, delivered fast. At FoodFleet, we bring your
              favorite dishes right to your doorstep — hot, fresh, and on time.
              Whether you're craving healthy salads, cheesy pastas, or indulgent
              desserts, we've got something for every mood and moment. Order
              now. Eat happy. 🍽️
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-right">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-content-center">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+91-9#########</li>
              <li>contact@FoodFleet.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 © FoodFleet.com-All Right Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
