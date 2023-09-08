import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const ProductCart = () => {
  const cartArr = useSelector((state) => state.cartReducer.cartArr);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-evenly mt-2">
          {cartArr.length &&
            cartArr?.map((productData, index) => {
              return <Product product={productData} key={index} />;
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCart;

/*
redux has a central state where all the states are present
states are immutable hence a copy of each state is made on every update
updations or mutations are done through actions which consists of type and payload. 
reducers are functions which take the current state and action as arg and returns new state. whenever user clicks a button and the state needs to be updated a dispatch function with the action type and payload is called. This action type is matched to the with the type in reducers and the reducer updates the corressponding state

*/
