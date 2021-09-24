import { loginConst } from "./constant";

function requestLogin(email, password) {
  return {
    type: loginConst.LOGIN_REQUEST,
    email,
    password,
  };
}

function requestLogout() {
  return {
    type: loginConst.LOG_OUT_REQUEST,
  };
}

export const loginAction = {
  requestLogin,
  requestLogout,
};
