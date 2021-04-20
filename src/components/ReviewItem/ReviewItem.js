import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, key } = props.product;
  const reviewStyle = {
    borderBottom: "1px solid gray",
    marginBottom: "10px",
    paddingBottom: "15px",
    marginLeft: "300px",
    marginRight: "300px",
  };
  return (
    <div style={reviewStyle}>
      <h1 className="product-name">{name}</h1>
      <h2>Quantity: {quantity}</h2>
      <br />
      <button className="cart-btn" onClick={() => props.removeProduct(key)}>
        Remove Item
      </button>
    </div>
  );
};

export default ReviewItem;
