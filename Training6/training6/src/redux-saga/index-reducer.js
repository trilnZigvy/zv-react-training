import { combineReducers } from "redux";
import { loginReducer } from "./login/reduce";
import { userReducer } from "./getData/reduce";
import { todoReducer } from "./todo/reduce";
// import { reducer as form } from "redux-form"; 
export const rootReducer = combineReducers({
  loginReducer,
  userReducer,
  todoReducer,
});