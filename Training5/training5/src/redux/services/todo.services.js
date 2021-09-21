import axios from "axios";
import { config } from "../config";
export const todoService = {
  getAll,
  addTask,
  deleteTask,
  updateTask,
};
const headers = {
  Authorization: "Bearer my-token",
  "My-Custom-Header": "foobar",
};

function getAll() {
  return axios
    .get(`${config.mockApi}${config.todo.getall}`, { headers })
    .then((res) => {
      localStorage.setItem("tasks", JSON.stringify(res.data));
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function addTask(task) {
  const requestOptions = {
    value: task,
    createAt: new Date().getTime(),
    completed: false,
  };
  return axios
    .post(`${config.mockApi}${config.todo.addTask}`, requestOptions, {
      headers,
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteTask(id) {
  return axios
    .delete(`${config.mockApi}${config.todo.delete}/${id}`, { headers })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateTask(id, task, completed, createAt) {
  const requestOptions = {
    value: task,
    createAt: createAt,
    completed: completed,
  };
  return axios
    .put(`${config.mockApi}${config.todo.update}/${id}`, requestOptions, {
      headers,
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

// const handleResponse = (res) => {
//   return res.data;
// };
