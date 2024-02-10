import React from "react";
import "./AboutPage.css";
import PlaceholderImage from "../../assets/logo.png";

const AboutPage: React.FC = () => {
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle">About Us</h1>
      <div className="aboutSection">
        <img src={PlaceholderImage} alt="Owner" className="aboutImage" />
        <div>
          <h2 className="aboutSubtitle">The Owner</h2>
          <p className="aboutText">
            The owner of TTS, John Doe, has a passion for handcrafted wood furniture. With years of experience in the industry, he prides himself on his attention to detail and commitment to customer satisfaction.
          </p>
        </div>
      </div>
      <div className="aboutSection">
        <img src={PlaceholderImage} alt="Products" className="aboutImage" />
        <div>
          <h2 className="aboutSubtitle">Our Products</h2>
          <p className="aboutText">
            We offer a wide range of high-quality, handcrafted wood furniture. Our team of skilled artisans uses the finest materials to create pieces that add a touch of nature to your home.
          </p>
        </div>
      </div>
      <div className="aboutSection">
        <img src={PlaceholderImage} alt="Sustainability" className="aboutImage" />
        <div>
          <h2 className="aboutSubtitle">Sustainability</h2>
          <p className="aboutText">
            We are committed to sustainability. We source our materials responsibly and strive to minimize our environmental impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;