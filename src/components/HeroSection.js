import React from 'react';
import './HeroSection.css';
import img1 from '../assets/hero-img1.png';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h4>Innovative Packing Designed for Impact</h4>
        <h1>Eco-conscious <br /><span className="purple">gifting solutions</span></h1>
        <h2>women-led innovation</h2>
        <div className="hero-buttons">
          <button className="btn-primary">Discover More</button>
          <button className="btn-outline">Explore Services →</button>
        </div>
      </div>
      <div className="hero-images">
        <img src={img1} alt="Packaging 1" />
              </div>
    </section>
  );
}

export default HeroSection;