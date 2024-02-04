import React from "react";
import "./ProductPage.css";
import WoodTableLivingRoom from "../../assets/woodtableinlivingroom.jpg";

const ProductPage: React.FC = () => {
  return (
    <div className="productPage">
      <div className="productImages">
        <img src={WoodTableLivingRoom} alt="Product Name" />
      </div>
      <div className="productDetails">
        <h1>Handcrafted Wooden Desk</h1>
        <p className="price">$249.99</p>
        <p className="description">
          This handcrafted wooden desk is not only a functional piece for your
          home office but also a testament to timeless design and craftsmanship.
          Made with the finest materials, it promises durability and style.
        </p>
        <button className="addToCart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
