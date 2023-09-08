import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../CartStore/actions";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  function handleClick(type) {
    if (type == "remove") {
      dispatch(removeFromCart(product));
    } else {
      dispatch(addToCart(product));
    }
  }
  return (
    <React.Fragment>
      <div
        className="col-2 p-2 border border-1 m-1 d-flex flex-column align-items-center justify-content-between"
        style={{ height: "350px" }}
      >
        <img src={product.images[0]} class="w-100 h-50 mt-2" alt="..." />
        <p className="text-left h4 mt-2">{product.title}</p>
        <p className="text-left h5">
          <span className="text-dark">${product.price}</span>{" "}
          <span className="text-danger text-decoration-line-through">
            ${Math.floor(product.price + product.discountPercentage)}
          </span>
        </p>
        <div className="container">
          <button
            className="btn btn-primary m-2 text-center"
            onClick={() => handleClick("remove")}
          >
            -
          </button>
          <button
            className="btn btn-primary m-2 text-center"
            onClick={() => handleClick("add")}
          >
            +
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
