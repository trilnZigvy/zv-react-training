import { logInOutSagas } from "./login/sagas";
import { getSagas } from "./getData/sagas";
import { all } from "redux-saga/effects";
export default function* rootSagas() {
  yield all([
    logInOutSagas.loginWatcher(),
    logInOutSagas.logoutWatcher(),
    getSagas.getAllWatcher(),
    getSagas.getByIdWatcher(),
  ]);
}
