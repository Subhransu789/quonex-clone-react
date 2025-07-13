import React from "react";
import "./Team.css";

// ✅ Import images from assets folder
import suma from "../assets/suma.png";
import mini from "../assets/mini.png";
import sanjana from "../assets/sanjana.png";
import malavika from "../assets/malavika.png";
import beena from "../assets/beena.png";
import abhishek from "../assets/abhishek.png";
import sekhar from "../assets/sekhar.png";

// ✅ Team data
const teamMembers = [
  {
    name: "Suma PV",
    title: "Founder & CEO",
    img: suma,
    details: "With 17+ years of experience, Suma is an entrepreneur driving innovative and sustainable packaging and gifting solutions with a focus on impact and empowerment."
  },
  {
    name: "Mini Sreejit",
    title: "Director",
    img: mini,
    details: "Director of SpreeHunt Management Services Private Limited, Mini is an HR expert blending strategic insight with empathy to build inclusive and value-driven workplaces."
  },
  {
    name: "Sanjana Sreejit",
    title: "Director",
    img: sanjana,
    details: "An HR professional passionate about women empowerment, Sanjana Sreejit brings energy, empathy, and fresh perspectives to creating inclusive workplaces and fostering equitable environments."
  },
  {
    name: "M Malavika",
    title: "Client Relations",
    img: malavika,
    details: "An IIT Madras graduate, Malavika is a young professional with expertise in client relations, and operations, she thrives on building meaningful client connections, streamlining processes, and delivering impactful solutions."
  },
  {
    name: "Beena Sujay",
    title: "Operations",
    img: beena,
    details: "An accomplished leader with extensive experience in B2B procurement and operations, Beena specializes in strategic sourcing, vendor management, and optimizing supply chains."
  },
  {
    name: "Abhishek Emmanuel",
    title: "Co-Founder & Director",
    img: abhishek,
    details: "Founder & CEO of Dealberg, Abhishek brings rich experience from Snapdeal, Staples, Dell, and Wipro, driving innovation and scaling impactful business solutions."
  },
  {
    name: "Sekhar Sreejit",
    title: "Co-Founder",
    img: sekhar,
    details: "An IIM Executive Alumni with 25+ years of experience, Sekhar Sreejit has led procurement efforts for MNCs like Diageo. He specializes in cost-effective sourcing, SCM strategies, and mentoring startups while championing diversity and inclusion."
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <p className="section-subtitle">Our Team</p>
      <h2 className="section-title">Our Awesome Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} className="team-img" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
            <div className="team-hover">
              <p>{member.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
