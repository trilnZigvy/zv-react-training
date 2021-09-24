import axios from "axios";
import { config } from "../config";
import { takeLatest, call, put } from "redux-saga/effects";
import { getDataConst } from "./constant";
const headers = {
  Authorization: "Bearer my-token",
  "My-Custom-Header": "foobar",
};

function getAll(role) {
  return new Promise((resolve, reject) => {
    if (role !== "admin") {
      return reject({
        status: 403,
        message: "You have not permission to do it",
      });
    }
    return axios
      .get(`${config.mockApi}${config.login.getall}`, { headers })
      .then((res) => {
        return resolve(res.data);
      })
      .catch((error) => {
        console.log(error);
        return reject(error);
      });
  });
}

function getById(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${config.mockApi}${config.login.getByid}/${id}`, { headers })
      .then((res) => {
        return resolve(res.data);
      })
      .catch((error) => {
        return reject(error);
      });
  });
}

function* getAllFlow(action) {
  const { role } = action;
  try {
    const user = yield call(getAll, role);
    yield put({ type: getDataConst.GET_ALL_SUCCESS, user });
  } catch (error) {
    yield put({ type: getDataConst.GET_ALL_FAILURE, error });
  }
}

function* getByIdFlow(action) {
  const { id } = action;
  try {
    const user = yield call(getById, id);
    yield put({ type: getDataConst.GET_BY_ID_SUCCESS, user });
  } catch (error) {
    yield put({ type: getDataConst.GET_BY_ID_FAILURE, error });
  }
}

function* getAllWatcher(){
    yield takeLatest(getDataConst.GET_ALL_REQUEST, getAllFlow)
}

function* getByIdWatcher() {
  yield takeLatest(getDataConst.GET_BY_ID_REQUEST, getByIdFlow);
}


export const getSagas = { getAllWatcher, getByIdWatcher };

