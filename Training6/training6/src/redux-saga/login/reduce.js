import { loginConst } from "./constant";

// import { userConst } from "../constant/user.constant";
// let user = JSON.parse({});
// console.log("user", user);
let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: false, user } : {};

export function loginReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case loginConst.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case loginConst.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case loginConst.LOGIN_FAILURE:
      return {};
    case loginConst.LOG_OUT:
      return {};
    default:
      return state;
  }
}
