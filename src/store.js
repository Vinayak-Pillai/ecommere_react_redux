import { applyMiddleware, legacy_createStore as createStore } from "redux";
import cartReducer from "./CartStore/cartReducer";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

// use this case if only one reducer
// const store = createStore(cartReducer);

// else use this
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// if more than 1 reducer use combine reducers
