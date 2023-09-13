import React, { useCallback, useEffect, useMemo, useState } from "react";
import Product from "./Product";
import productServices from "../Services/productServices";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

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

  function handleCategoryClick(index) {
    setIndex(index);
  }

  const handleProductClick = useCallback(() => {
    setProducts([products[2], ...products]);
  }, [products]);

  async function getCategories() {
    try {
      const { data = [] } = await productServices.getAllCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("Component re-rendered");
  });

  const memoizedProducts = useMemo(
    () =>
      products.length &&
      products?.map((productData, index) => {
        return <Product product={productData} key={index} />;
      }),
    [products]
  );
  const memoizedCategories = useMemo(() => categories, [categories]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="my-2">
          {index}
          <button className="btn btn-primary mx-2" onClick={handleProductClick}>
            Add Product
          </button>
          <div className="h3">Categories</div>
          <div className="row">
            {categories.map((category, index) => {
              return (
                <div
                  className="col-md-3"
                  key={index}
                  onClick={() => {
                    handleCategoryClick(index);
                  }}
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
        </div>
        <div className="row justify-content-evenly mt-2">
          {/* {memoizedProducts} */}
          {products.length &&
            products?.map((productData, index) => {
              return (
                <Product
                  product={productData}
                  key={index}
                  handleProductClick={handleProductClick}
                />
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
