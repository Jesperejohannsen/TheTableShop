import React from "react";
import "./ProductPage.css";
import WoodTableLivingRoom from "../../assets/woodtableinlivingroom.jpg";

const ProductPage: React.FC = () => {

  const products = Array(6).fill(null);

  return (
    <div className="productsContainer">
      {products.map((_, index) => (
        <div key={index} className="productItem">
          <div className="productImageContainer">
            <img
              src={WoodTableLivingRoom}
              alt="Handcrafted Wood Table"
              className="productImage"
            />
          </div>
          <div className="productDetails">
            <h1 className="productName">Handcrafted Wood Table</h1>
            <p className="productPrice">$299.99</p>
            <p className="productDescription">
              Experience the elegance and durability of our handcrafted wood table,
              made with the finest materials to add a touch of nature to your home.
            </p>
            <button className="addToCartButton">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
