import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const ProductCart = () => {
  const products = useSelector((state) => state.cartReducer.cartArr);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-evenly mt-2">
          {products.length &&
            products?.map((productData, index) => {
              return <Product product={productData} key={index} />;
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCart;
