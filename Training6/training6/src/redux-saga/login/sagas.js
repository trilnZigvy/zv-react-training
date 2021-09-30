import axios from "axios";
import { config } from "../config";
import { takeLatest, call, put } from "redux-saga/effects";
import { loginConst } from "./constant";


const headers = {
  Authorization: "Bearer my-token",
  "My-Custom-Header": "foobar",
};

function login(email, password) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${config.mockApi}${config.login.getWithEmailNPass}/?email=${email}&password=${password}`,
        { headers }
      )
      .then((res) => {
        if (
          res.data.length !== 1 ||
          res.data[0].email !== email ||
          res.data[0].password !== password
        ) {
          return undefined;
        }
        localStorage.setItem("user", JSON.stringify(res.data[0]));
        return resolve(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
        return reject(error);
      });
  });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
  return {};
}
// function signUp() {}
// function updateUser() {}
// function deleteUser() {}

function* loginFlow(action) {
  const { email, password } = action;
  try {
    const user = yield call(login, email, password);
    yield put({ type: loginConst.LOGIN_SUCCESS, user });
  } catch (error) {
    yield put({ type: loginConst.LOGIN_FAILURE, error });
  }
}

function* logOutFlow() {
  try {
    const res = yield call(logout);
    yield put({ type: loginConst.LOG_OUT, res });
  } catch (error) {
    console.log(error);
  }
}

function* loginWatcher() {
  yield takeLatest(loginConst.LOGIN_REQUEST, loginFlow);
}

function* logoutWatcher() {
  yield takeLatest(loginConst.LOG_OUT_REQUEST, logOutFlow);
}

export const logInOutSagas = { loginWatcher, logoutWatcher };
