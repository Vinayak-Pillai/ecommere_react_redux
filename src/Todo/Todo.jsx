import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoData } from "../TodoStore/actions";

const Todo = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todoReducer.todoArr);
  useEffect(() => {
    dispatch(getTodoData());
  }, []);

  useEffect(() => {
    console.log(todoData);
  }, [todoData]);
  return <React.Fragment>{JSON.stringify(todoData)}</React.Fragment>;
};

export default Todo;
