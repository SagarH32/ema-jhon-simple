import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;

  //we can use reduce rather than for loop
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    total = total + product.price;
  }

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
    </div>
  );
};

export default Cart;
