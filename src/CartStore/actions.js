import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionsTypes";

// actions are functions which takes a payload if required and returns a type and payload
export function addToCart(payload) {
  return {
    type: ADD_TO_CART,
    // payload:payload
    payload,
  };
}

export function removeFromCart(payload) {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
}
