// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Quenox Nexgen" />
      </div>
      <nav className="nav-links">
        <ul>
          <li>Why Us</li>
          <li>Products</li>
          <li>Competitive Edge</li>
          <li>Women Led-Advantage</li>
          <li>Team</li>
        </ul>
      </nav>
      <div className="contact">
        <p>Call Us</p>
        <p> 📞 +91 990 082 0448</p>
      </div>
    </header>
  );
}

export default Header;