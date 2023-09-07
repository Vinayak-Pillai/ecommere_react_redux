import React, { useEffect, useState } from "react";
import productServices from "../Services/productServices";

const Home = () => {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      const { data = [] } = await productServices.getAllCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        {categories.map((category, index) => {
          return (
            <div className="col-md-3" key={index}>
              <div className="card-body border border-2 m-2">
                <p className="text-center fw-bold p-2">
                  {category.toUpperCase()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Home;
