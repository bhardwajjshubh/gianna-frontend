import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Shop.module.css";
import bottleImage from "../assets/Bottle.png";

const ProductCard = ({ title, description, price }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/contact-us");
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={bottleImage} alt="Product" />
        <div className={styles.cardOverlay}>
          <button className={styles.buyNowButton} onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>₹{price}</p>
      </div>
    </div>
  );
};

// Define product data
const products = [
  {
    title: "Clear 200ml Pack of 5 Cases",
    description: "Pack of 240 bottles",
    price: "1,440.00",
  },
  {
    title: "Clear 500ml Pack of 5 Cases",
    description: "Pack of 120 bottles",
    price: "1,200.00",
  },
  {
    title: "Clear 1L Pack of 5 Cases",
    description: "Pack of 60 bottles",
    price: "1,200.00",
  },
  {
    title: "Clear 1.5L Pack of 5 Cases",
    description: "Pack of 60 bottles",
    price: "2,000.00",
  },
  {
    title: "Clear 2L Pack of 5 Cases",
    description: "Pack of 60 bottles",
    price: "2,500.00",
  },
  {
    title: "Clear 5L Pack of 5 Cases",
    description: "Pack of 60 bottles",
    price: "3,000.00",
  },
];

// Create a component to render all product cards
const ProductCardList = () => {
  return (
    <div className={styles.shopSection}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductCardList;
