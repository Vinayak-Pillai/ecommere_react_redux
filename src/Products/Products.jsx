import React, { useCallback, useEffect, useMemo, useState } from "react";
import Product from "./Product";
import productServices from "../Services/productServices";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Test this");

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const handleClickAddProduct = () => {
    setProducts([products[1], ...products]);
    setCategories([categories[2], ...categories]);
  };

  const memoizedData = useMemo(() => selectedCategory, [products, categories]);

  const handleSingleProductClick = useCallback(() => {
    setProducts([products[3], ...products]);
  }, [products]);

  async function getCategories() {
    try {
      const { data = [] } = await productServices.getAllCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProducts() {
    try {
      let payload = {
        skip: 0,
        limit: 100,
      };
      const { data = [] } = await productServices.getAllProducts(payload);
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickCategory(categoryValue) {
    console.log(`${categoryValue} clicked`);
    setSelectedCategory(categoryValue);
  }

  return (
    <React.Fragment>
      {/* <p className="h3">Selected Category: {selectedCategory.toUpperCase()}</p> */}
      <p className="h3">Selected Category: {memoizedData.toUpperCase()}</p>
      <div className="container">
        <div className="row">
          <button
            className="btn btn-primary my-2"
            onClick={handleClickAddProduct}
          >
            Add Product
          </button>
          {categories.map((category, index) => {
            return (
              <div
                className="col-md-3"
                key={index}
                onClick={() => handleClickCategory(category)}
              >
                <div className="card-body border border-2 m-2">
                  <p className="text-center fw-bold p-2">
                    {category.toUpperCase()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row justify-content-evenly mt-2">
          {products.length &&
            products?.map((productData, index) => {
              return (
                <Product
                  product={productData}
                  key={index}
                  handleClick={handleSingleProductClick}
                />
              );
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
