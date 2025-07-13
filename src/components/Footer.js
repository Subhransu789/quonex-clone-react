import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section: Logo & Text */}
      <div className="footer-left">
        <img src={logo} alt="Quenox Nexgen Logo" className="footer-logo" />
        <p>
          <strong>Quenox Nexgen:</strong> Sustainable packaging and gifting solutions,
          empowering women and creating a positive impact.
        </p>

        {/* Social Icons */}
        <div className="footer-icons">
          <a href="https://quenox.in/#~/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>

        <p className="footer-copy">© 2025 QuenoxNexgen</p>
      </div>

      {/* Right Section: Links */}
      <div className="footer-links">
        <a href="#about">About company</a>
        <a href="#services">Company services</a>
        <a href="#products">Products</a>
        <a href="#team">Creative people</a>
      </div>
    </footer>
  );
};

export default Footer;
