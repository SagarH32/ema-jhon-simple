import React from "react";
import { useParams } from "react-router";
import fakeData from "../../fakeData";
import Products from "../Products/Products";

const ProductDetail = () => {
  const { productKey } = useParams();
  const product = fakeData.find((pd) => pd.key === productKey);
  console.log(product);
  return (
    <div>
      {product ? (
        <Products addToCartBtn={false} product={product}></Products>
      ) : (
        <h1>Product Not Found</h1>
      )}
    </div>
  );
};

export default ProductDetail;
