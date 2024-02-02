import React from 'react';
import './FrontPage.css';

const FrontPage: React.FC = () => {
  return (
    <div className="homePage">
      <section className="hero">
        <h1>Welcome to WoodWorks</h1>
        <p>Explore our exclusive collection of handcrafted wooden accessories.</p>
        <button className="shopNow">Shop Now</button>
      </section>
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {/* Placeholder for product components */}
          <div className="product">Product 1</div>
          <div className="product">Product 2</div>
          <div className="product">Product 3</div>
        </div>
      </section>
    </div>
  );
};

export default FrontPage;
