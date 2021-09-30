import { logInOutSagas } from "./login/sagas";
import { getSagas } from "./getData/sagas";
import { all } from "redux-saga/effects";
import { todoSagas } from "./todo/sagas";
import networkSaga from "./todo/network.saga";
export default function* rootSagas() {
  yield all([
    logInOutSagas.loginWatcher(),
    logInOutSagas.logoutWatcher(),
    getSagas.getAllWatcher(),
    getSagas.getByIdWatcher(),
    todoSagas.addWatcher(),
    todoSagas.draftWatcher(),
    todoSagas.readyWatcher(),
    todoSagas.submitWatcherChannel(),
    todoSagas.submitWatcher(),
    networkSaga()
  ]);
}
