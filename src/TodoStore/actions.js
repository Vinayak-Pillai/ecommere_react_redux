import axios from "axios";
import { ADD_TODO_DATA } from "./actionTypes";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO_DATA,
    payload,
  };
};

export const getTodoData = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    const { data } = response;
    console.log(data);
    dispatch(addTodo(data));
  } catch (error) {
    console.log(error);
  }
};
