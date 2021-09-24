import { userConst } from "../constant/user.constant";

// let user = JSON.parse({});
// console.log("user", user);
let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: false, user } : {};

export function authenReducer(state = initialState, action) {
  switch (action.type) {
    case userConst.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConst.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConst.LOGIN_FAILURE:
      return {};
    case userConst.LOG_OUT:
      return {};
    default:
      return state;
  }
}
