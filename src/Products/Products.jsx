import React, { useEffect, useState } from "react";
import Product from "./Product";
import productServices from "../Services/productServices";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data = [] } = await productServices.getAllProducts();
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  }
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

export default Products;

// packages required
// react-redux
// redux
// redux-thunk
