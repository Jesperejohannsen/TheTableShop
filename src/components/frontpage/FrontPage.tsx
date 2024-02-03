import React, { useState } from 'react';
import './FrontPage.css';

const testimonials = [
  { id: 1, text: "WoodWorks products have transformed my home office into a warm, inviting space. Highly recommend!", author: "Alex Johnson" },
  { id: 2, text: "The craftsmanship is top-notch and the service was impeccable. A true gem for wooden accessories lovers.", author: "Casey Smith" },
  { id: 3, text: "I bought a wooden desk organizer and it's not only functional but a beautiful piece of art.", author: "Jordan Lee" },
];

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((current) => (current + 1) % testimonials.length);
  };

  return (
    <div className="homePage">
      <section className="hero">
        <h1>Velkommen til The Table Shop</h1>
        <p>Udforsk vores håndlavede produkter.</p>
        <button className="shopNow">Køb her</button>
      </section>
      <section className="featured">
        <div className="products-grid">
          {/* Placeholder for product components */}
          <div className="product">Produkt 1</div>
          <div className="product">Produkt 2</div>
          <div className="product">Produkt 3</div>
        </div>
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
