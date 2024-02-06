import React from "react";
import "./ProductPage.css";
import WoodTableLivingRoom from "../../assets/woodtableinlivingroom.jpg";

interface ProductProps {
  image: string;
  name: string;
  price: string;
  description: string;
}

const Product: React.FC<ProductProps> = ({ image, name, price, description }) => (
  <div className="productItem">
    <div className="productImageContainer">
      <img src={image} alt={name} className="productImage" />
    </div>
    <div className="productDetails">
      <h1 className="productName">{name}</h1>
      <p className="productPrice">{price}</p>
      <p className="productDescription">{description}</p>
      <button className="addToCartButton">Add to Cart</button>
    </div>
  </div>
);

const ProductPage: React.FC = () => {
  const products = Array(6).fill({
    image: WoodTableLivingRoom,
    name: "Handcrafted Wood Table",
    price: "$299.99",
    description: "Experience the elegance and durability of our handcrafted wood table, made with the finest materials to add a touch of nature to your home."
  });

  return (
    <div className="productsContainer">
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductPage;