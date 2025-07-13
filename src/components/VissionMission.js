// src/components/VisionMission.js
import React from 'react';
import './VissionMission.css';

const VisionMission = () => {
  return (
    <div className="vm-container">
      <h1 className="vm-title">Vision & Mission</h1>

      <section className="vm-section">
        <h2 className="vm-subtitle">Our Vision</h2>
        <div className="vm-card">
          <p>
            To become the preferred partner for businesses seeking customized packaging solutions
            that align with their goals—be it cost-effectiveness, innovation, or sustainability.
          </p>
        </div>
      </section>

      <section className="vm-section">
        <h2 className="vm-subtitle">Our Mission</h2>
        <div className="vm-grid">
          <div className="vm-card">
            <p>Provide high-quality, reliable, and scalable packaging and corporate gifting solutions.</p>
          </div>
          <div className="vm-card">
            <p>Champion sustainability through eco-friendly practices and innovative solutions.</p>
          </div>
          <div className="vm-card">
            <p>Foster diversity and inclusivity through women-led leadership and empowerment.</p>
          </div>
          <div className="vm-card">
            <p>Collaborate with businesses to achieve their unique packaging and gifting objectives.</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default VisionMission;
