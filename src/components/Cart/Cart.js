import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);

  //we can use reduce rather than for loop
  let total = cart.reduce((total, sum) => total + sum.price, 0);

  // let total = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   let product = cart[i];
  //   total = total + product.price * product.quantity;

  //   debugger;
  // }

  const formatNumber = (num) => {
    const newNumber = num.toFixed(2);
    return Number(newNumber);
  };

  let shipping = 0;
  if (total === 0) {
    shipping = 0;
  } else if (total > 0 && total < 40) {
    shipping = 10.0;
  } else if (total > 40) {
    shipping = 15.55;
  }

  const tax = total / 10;
  const grandTotal = total + shipping + tax;

  return (
    <div>
      <h3>Order Summary</h3>
      <p style={{ color: "green", fontWeight: "500" }}>
        Orderd Item: {cart.length}
      </p>
      <p>Product Price: ${formatNumber(total)}</p>
      <p>Shipping Cost: ${formatNumber(shipping)}</p>
      <p>
        <small>Tax: ${formatNumber(tax)}</small>
      </p>
      <h3>
        Total Price:{" "}
        <span style={{ color: "#B12704" }}>${formatNumber(grandTotal)}</span>
      </h3>
      <br />
      <Link to="/review">
        <button className="cart-btn">Review Order</button>
      </Link>
    </div>
  );
};

export default Cart;
