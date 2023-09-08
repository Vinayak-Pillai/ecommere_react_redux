import { combineReducers } from "redux";
import cartReducer from "./CartStore/cartReducers";
import todoReducer from "./TodoStore/todoReducers";

export default combineReducers({ cartReducer, todoReducer });
