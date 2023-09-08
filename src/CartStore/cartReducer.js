import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionsTypes";

const initialState = {
  cartArr: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action);
      return {
        ...state,
        cartArr: [...state.cartArr, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartArr: state.cartArr.filter((cart) => {
          return cart.id != action.payload?.id;
        }),
      };
    default:
      return state;
  }
}
