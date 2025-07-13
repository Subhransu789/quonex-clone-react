import React from "react";
import "./Contact.css";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail />,
    title: "Email Address",
    detail: "suma@quenox.com"
  },
  {
    icon: <FiPhone />,
    title: "Phone Number",
    detail: "+91 990 082 0448"
  },
  {
    icon: <FiMapPin />,
    title: "Our Address",
    detail: "4th Floor, No:1/1, 18th Main,\nSector 3, HSR Layout, Bangalore\n560102"
  }
];

const Contact = () => {
  return (
    <div className="contact-section">
      {contactInfo.map((item, index) => (
        <div className="contact-card" key={index}>
          <div className="contact-icon">{item.icon}</div>
          <h4>{item.title}</h4>
          <p>{item.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default Contact;
