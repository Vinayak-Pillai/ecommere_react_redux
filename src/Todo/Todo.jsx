import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import todoReducer from "../TodoStore/todoReducers";
import { getTodoData } from "../TodoStore/actions";

const Todo = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todoReducer.todoData);
  useEffect(() => {
    dispatch(getTodoData());
  });
  return <div>{JSON.stringify(todoData)}</div>;
};

export default Todo;
