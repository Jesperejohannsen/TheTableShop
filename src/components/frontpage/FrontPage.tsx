import React, { useState } from "react";
import "./FrontPage.css";
import WoodTableLivingRoom from "../../assets/woodtableinlivingroom.jpg";
import WoodBench from "../../assets/woodBench.jpg";
import WallHouse from "../../assets/wallHouse.jpg";
import WoodStorage from "../../assets/woodStorage.jpg";
import TTSLogo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    text: "WoodWorks products have transformed my home office into a warm, inviting space. Highly recommend!",
    author: "Alex Johnson",
  },
  {
    id: 2,
    text: "The craftsmanship is top-notch and the service was impeccable. A true gem for wooden accessories lovers.",
    author: "Casey Smith",
  },
  {
    id: 3,
    text: "I bought a wooden desk organizer and it's not only functional but a beautiful piece of art.",
    author: "Jordan Lee",
  },
];

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((current) => (current + 1) % testimonials.length);
  };

  const history = useHistory();
  const navigateTo = () => history.push("/products");

  return (
    <div className="homePage">
      <section className="hero">
        <h1>Velkommen til The Table Shop</h1>
        <p>Udforsk vores håndlavede produkter.</p>
        <button onClick={navigateTo}className="shopNow">Se vores udvalg</button>
      </section>
      <section className="featured">
        <div className="products-grid">
          <div className="product">
            <img
              className="FrontPageImages"
              src={WoodTableLivingRoom}
              alt="Wood Table Living Room"
            />
          </div>
          <div className="product">
            <img 
              className="FrontPageImages" 
              src={WoodBench} 
              alt="Wood Bench" />
          </div>
          <div className="product">
            <img
              className="FrontPageImages"
              src={TTSLogo}
              alt="Wood Wall House"
            />
          </div>
          <div className="product">
            <img
              className="FrontPageImages"
              src={WallHouse} 
              alt="Wood Table Living Room"
            />
          </div>
          <div className="product">
            <img
              className="FrontPageImages"
              src={WoodStorage}
              alt="Wood Table Living Room"
            />
          </div>
        </div>
      </section>
      <section className="introductionTheTableShopFrontPage">
        <h2 className="introductionTheTableShopFrontPageHeader">Om os</h2>
        <p className="introductionTheTableShopFrontPageParagraph">
          The Table Shop er en dansk virksomhed, der specialiserer sig i
          håndlavede træprodukter. Vi tror på at skabe produkter, der er
          smukke, funktionelle og bæredygtige. Vores produkter er lavet af
          genanvendt træ og er designet til at holde i mange år. Vi er stolte af
          at skabe produkter, der er med til at gøre dit hjem til et hyggeligt
          sted.
        </p>
      </section>
      <section className="testimonials">
        <h2>Hør fra vores kunder</h2>
        <div className="testimonial">
          <p>"{testimonials[currentTestimonial].text}"</p>
          <p className="author">- {testimonials[currentTestimonial].author}</p>
        </div>
        <button onClick={nextTestimonial}>Næste</button>
      </section>
    </div>
  );
};

export default HomePage;
