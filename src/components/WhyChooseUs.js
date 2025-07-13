// src/components/WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const WhyChooseUs = () => {
  return (
    <div className='why-choose-us'>
      <div className="images-section">
        <img src={img1} alt="Product 1" className="choose-img" />
        <img src={img2} alt="Product 2" className="choose-img" />
        <img src={img3} alt="Product 3" className="choose-img" />
      </div>
      <div className="text-section">
        <h4 className="why-subtitle">Why Choose Us</h4>
        <h2 className="why-title">Choose Impact, Choose Quenox Nexgen</h2>
        <ul className="why-list">
          <li><strong>Diverse Offerings:</strong> From cost-effective bulk packaging to premium, innovative designs, we cater to businesses of all sizes and sectors.</li>
          <li><strong>Tailored Solutions:</strong> We work closely with clients to understand their specific needs and deliver customized results.</li>
          <li><strong>Empowered Leadership:</strong> With women at the helm, we bring fresh perspectives and a strong commitment to inclusivity in every aspect of our operations.</li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;