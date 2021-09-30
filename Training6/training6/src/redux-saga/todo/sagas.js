// import axios from "axios";
// import { config } from "../config";
import { todoConst } from "./constant";
import { takeLatest, call, put, delay, takeEvery } from "redux-saga/effects";
// const headers = {
//   Authorization: "Bearer my-token",
//   "My-Custom-Header": "foobar",
// };
import { todoAction } from "./action";
import { store } from "./../store";

// const axiosInstance = axios.create({ timeout: 1000 });

function addTask(task) {
  // console.log("task", task);
  return new Promise((resolve, reject) => {
    if (task) return resolve(task);
    return reject({});
  });
}

// function updateTask(task) {
//   return new Promise((resolve, reject) => {
//     if (task) return resolve(task);
//     return reject({});
//   });
// }

function submitSuccess(task) {
  return new Promise((resolve, reject) => {
    return resolve({ id: task.id, value: task.value, status: "SUCCESS" });
    // axiosInstance
    //   .post(``, { submit: true, task: task })
    //   .then((res) => {
    //     return resolve(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return reject(error);
    //   });
  });
}

function submitFail(task) {
  return new Promise((resolve, reject) => {
    return resolve({ id: task.id, value: task.value, status: "ERROR" });
    // axiosInstance
    //   .post(``, { submit: false, task: task })
    //   .then((res) => {
    //     return resolve(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return reject(error);
    //   });
  });
}

function draftTask(task) {
  return new Promise((resolve, reject) => {
    if (task) return resolve(task);
    return reject({});
  });
}

function readyTask(task) {
  return new Promise((resolve, reject) => {
    if (task) return resolve(task);
    return reject({});
  });
}

function* addFlow(action) {
  let { task } = action;
  try {
    let data = yield call(addTask, task);
    // const user = yield call(login, email, password);/
    // console.log("data", data);
    yield put({ type: todoConst.ADD_SUCCESS, data });
  } catch (error) {
    yield put({ type: todoConst.ADD_FAILURE, error });
  }
}

// function* updateFlow(action) {
//   const { task } = action;
//   try {
//     let data = yield call(updateTask, task);
//     // const user = yield call(login, email, password);/
//     yield put({ type: todoConst.UPDATE_SUCCESS, data });
//   } catch (error) {
//     yield put({ type: todoConst.UPDATE_FAILURE, error });
//   }
// }

function* submitFlow(action) {
  const { randomStatus, task } = action;
  try {
    let data = {};
    if (randomStatus) {
      data = yield call(submitSuccess, task);
    } else {
      data = yield call(submitFail, task);
    }
    yield delay(2000);
    // const user = yield call(login, email, password);/
    yield put({ type: todoConst.SUBMIT_SUCCESS, data });
  } catch (error) {
    yield put({ type: todoConst.SUBMIT_FAILURE, error });
  }
}

function* draftFlow(action) {
  const { task } = action;
  try {
    let data = yield call(draftTask, task);
    // const user = yield call(login, email, password);/
    yield put({ type: todoConst.DRAFT_SUCCESS, task, data });
  } catch (error) {
    yield put({ type: todoConst.DRAFT_FAILURE, task, error });
  }
}

function* readyFlow(action) {
  const { task } = action;
  try {
    let data = yield call(readyTask, task);
    // const user = yield call(login, email, password);/
    yield put({ type: todoConst.READY_SUCCESS, data });
  } catch (error) {
    yield put({ type: todoConst.READY_FAILURE, error });
  }
}

function* addWatcher() {
  yield takeLatest(todoConst.ADD_TASK, addFlow);
}

// function* updateWatcher() {
//   yield takeLatest(todoConst.UPDATE_TASK, updateFlow);
// }

function* draftWatcher() {
  yield takeLatest(todoConst.DRAFT, draftFlow);
}

function* readyWatcher() {
  yield takeLatest(todoConst.READY, readyFlow);
}

function* submitWatcher() {
  yield takeEvery(todoConst.SUBMMITING, submitFlow);
}

function* submitWatcherChannel() {
  // const requestChan = yield actionChannel(todoConst.NE);
  // yield take(requestChan);
  while (true) {
    console.log("on going", store.getState().todoReducer.queue);
    if (
      store.getState().todoReducer.queue.length &&
      store.getState().todoReducer.online
    ) {
      let task = store.getState().todoReducer.queue.shift();
      let a = Number.parseInt(Math.random() * 1.99);
      // yield put(submitWatcher, { randomStatus: a, task: task });
      yield put(todoAction.submitTask(a, task));
      
    } 
    yield delay(2000);
  }
}

export const todoSagas = {
  submitWatcherChannel,
  readyWatcher,
  draftWatcher,
  addWatcher,
  submitWatcher,
  // updateWatcher,
};
