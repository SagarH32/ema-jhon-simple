import React from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import { useState } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        <h1>
          {products.map((item) => (
            <Products
              product={item}
              handleAddProduct={handleAddProduct}
            ></Products>
          ))}
        </h1>
      </div>
      <div className="cart-container">
        <div className="cart-box">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
