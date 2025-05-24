import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./all.css"; // Import the CSS file
import logo from "../assets/footer-logo.png"
import Home from "./body"
import About from "./about"
import Event from "./event-section"
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-column">
          <div className="footer-logo">
            <img src={logo} alt="Communion" />

          </div>
          <p className="footer-text">
            Discover the power of connection with Communion. Uniting diverse communities through spirituality and innovation, we foster inclusivity, collaboration, and social cohesion for a better world.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/"><FaFacebookF /></a>
            <a href="https://x.com/"><FaTwitter /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
            <a href="https://www.youtube.com/"><FaYoutube /></a>
          </div>
        </div>

        {/* Middle Section - Company Links */}
        <div className="footer-column footer-links">
          <h2>Company</h2>
          <ul className="footer-links-list">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/events">Events</Link></li>

          </ul>
        </div>

        {/* Right Section - Contact */}
        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <p>contact@communionhub.org</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright © 2024. All rights reserved to Communion</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
