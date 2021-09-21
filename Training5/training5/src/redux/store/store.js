import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reduces";
import thunkMiddleware from "redux-thunk";
// import {createLogger } from 'redu'
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store