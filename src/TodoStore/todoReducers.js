import { ADD_TODO_DATA } from "./actionTypes";

const initialState = {
  todoData: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_DATA:
      return { ...state, todoData: [...action.payload] };
    default:
      return state;
  }
}
