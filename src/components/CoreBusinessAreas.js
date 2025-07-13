import React from 'react';
import './CoreBusinessAreas.css'; 
import box1 from '../assets/box1.jpg';
import box2 from '../assets/box2.jpg';
import box3 from '../assets/box3.jpg';

const businessAreas = [
  {
    title: 'Collaborate with businesses to achieve their unique packaging and gifting objectives',
    image: box1,
  },
  {
    title: 'Creative and premium gifting designs',
    image: box2,
  },
  {
    title: 'Tailored solutions for diverse business needs and sectors',
    image: box3,
  },
];

const CoreBusinessAreas = () => {
  return (
    <section className="core-container">
      <div className="core-header">
        <h2>Core Business Areas</h2>
        <p>We offer comprehensive packaging and corporate gifting solutions across industries, including:</p>
      </div>
      <div className="core-grid">
        {businessAreas.map((area, index) => (
          <div key={index} className="core-card" style={{ backgroundImage: `url(${area.image})` }}>
            <div className="core-overlay">
              <p>{area.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreBusinessAreas;
