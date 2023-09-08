import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState = {
  cartArr: [],
  productsCount: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action.payload, "from here");
      return {
        ...state,
        cartArr: [...state.cartArr, action.payload],
      };
    case REMOVE_FROM_CART:
      console.log(action.payload);
      return {
        ...state,
        cartArr: state.cartArr.filter((cart, index) => {
          console.log({ index, payload: action.payload });
          return cart.id !== action.payload?.id;
        }),
      };
    default:
      return state;
  }
}
