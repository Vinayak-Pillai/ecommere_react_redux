import { combineReducers } from "redux";
import cartReducer from "./CartStore/cartReducer";
import todoReducer from "./TodoStore/todoReducer";

export default combineReducers({ cartReducer, todoReducer });
