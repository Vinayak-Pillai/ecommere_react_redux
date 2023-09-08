import { GET_TODO } from "./actionTypes";

const initialState = {
  todoArr: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TODO:
      return { ...state, todoArr: [...action.payload] };

    default:
      return state;
  }
}
