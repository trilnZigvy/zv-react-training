import { todoConst } from "./constant";

function setOnline() {
  return { type: todoConst.ONLINE };
}

function setOffline() {
  return { type: todoConst.OFFLINE };
}

function setNetworkStatus(status){
  return {type: todoConst.NETWORK, status }
}

function addTask(task) {
  return { type: todoConst.ADD_TASK, task };
}

function draftTask(task) {
  return { type: todoConst.DRAFT, task };
}

function submitTask(randomStatus, task){
  return { type: todoConst.SUBMMITING, randomStatus, task };
}

function readyTask(task) {
  return { type: todoConst.READY_SUCCESS, task };
}

function removeAll(task) {
  return { type: todoConst.REMOVE_ALL, task };
}

export const todoAction = {
  removeAll,
  setOnline,
  setOffline,
  addTask,
  draftTask,
  readyTask,
  setNetworkStatus,
  submitTask,
};
