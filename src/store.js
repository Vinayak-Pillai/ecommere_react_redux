import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./CartStore/cartReducers";
import rootReducer from "./rootReducer";
import todoReducer from "./TodoStore/todoReducers";

// const store = createStore(cartReducer);

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
