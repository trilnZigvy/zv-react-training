
import { combineReducers } from "redux";
import { authenReducer } from "./authen.reduce";
import { userReducer } from "./user.reduce";
const rootReducer = combineReducers({
  authenReducer,
  userReducer,
});

export default rootReducer;
