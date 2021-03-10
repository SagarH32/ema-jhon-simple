import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = (props) => {
  const {
    name,
    img,
    key,
    price,
    priceFraction,
    category,
    features,
    seller,
    shipping,
    star,
    stock,
    url,
    wholePrice,
    starCount,
  } = props.product;
  return (
    <div className="product">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="product-content">
        <h5 className="product-name">{name}</h5>
        <br />
        <p className="seller-name">
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in stock - Order soon</small>
        </p>
        <button
          className="cart-btn"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Products;
