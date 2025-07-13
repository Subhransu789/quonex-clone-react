// src/components/ProductCarousel.js
import React, { useRef } from 'react';
import './ProductCarousel.css';

import corrugated from '../assets/corrugated-boxes.png';
import onboarding from '../assets/onboarding-kit.png';
import rewards from '../assets/certificates.png';
import laminates from '../assets/laminates.png';
import diwali from '../assets/diwali.png';
import delivery from '../assets/delivery-bag.png';
import shrink from '../assets/shrink-wraps.png';


const products = [
  { title: "Corrugated Boxes", image: corrugated },
  { title: "Employee Onboarding Kit", image: onboarding },
  { title: "Rewards and Certificates", image: rewards },
  { title: "Laminates", image: laminates },
  { title: "Diwali Hamper", image: diwali },
  { title: "Delivery Bag", image: delivery },
  { title: "Shrink Wraps", image: shrink }
 
];

function ProductCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="carousel-container">
      <h2 className="section-title">Our Products</h2>
      <div className="carousel-controls">
        <button onClick={() => scroll('left')}>&lt;</button>
        <div className="carousel-scroll" ref={scrollRef}>
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.title} />
              <div className="product-title">{product.title}</div>
            </div>
          ))}
        </div>
        <button onClick={() => scroll('right')}>&gt;</button>
      </div>
    </div>
  );
}

export default ProductCarousel;
