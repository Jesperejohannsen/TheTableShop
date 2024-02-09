import React from "react";
import "./AboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle">About Us</h1>
      <p className="aboutText">
        We are a company dedicated to providing high-quality, handcrafted wood furniture. Our team of skilled artisans uses the finest materials to create pieces that add a touch of nature to your home.
      </p>
    </div>
  );
};

export default AboutPage;