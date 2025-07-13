import React from "react";
import "./WomenLed.css";


import img3 from "../assets/women-led3.png";
import img1 from "../assets/women-led1.png";
import img2 from "../assets/women-led2.png";

const WomenLed = () => {
  const bulletPoints = [
    "Empowerment in Action sustainability, or creating impactful packaging and gifting designs that stand out.",
    "As a woman-majority stakeholder company, Quenox NexGen is dedicated to fostering gender diversity and creating opportunities for women entrepreneurs.",
    "Business Impact",
    "Companies with strong female leadership are more likely to achieve sustainable growth and deliver higher value to stakeholders. By partnering with us, you contribute to a broader social impact while fulfilling your business needs.",
  ];

  return (
    <div className="women-led-container">
      {/* Left: Text Section */}
      <div className="women-led-text">
        <h2>Women-Led Advantage</h2>
        <ul>
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Right: Image Grid */}
      <div className="women-led-images">
        <img src={img3} alt="Gift 3" />
        <img src={img1} alt="Gift 1" />
        <img src={img2} alt="Gift 2" />
      </div>
    </div>
  );
};

export default WomenLed;
