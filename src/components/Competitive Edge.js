import React from 'react';
import './Competitive Edge.css';

const CompetitiveEdge = () => {
  return (
    <div className="competitive-section">
      <h2 className="competitive-title">Competitive Edge</h2>
      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          <h3 className="card-title">Customer-Centric Approach:</h3>
          <p className="card-text">
            We focus on understanding your business goals—whether it's reducing costs,
            enhancing sustainability, or creating impactful packaging and gifting designs that stand out.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <h3 className="card-title">Reliability & Quality Assurance:</h3>
          <p className="card-text">
            Our commitment to delivering consistent quality ensures long-term partnerships built on trust.
          </p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <h3 className="card-title">Scalable Solutions:</h3>
          <p className="card-text">
            From startups to established enterprises, our packaging and corporate gifting solutions
            adapt and grow with your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveEdge;
