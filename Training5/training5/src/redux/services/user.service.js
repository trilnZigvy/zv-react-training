import axios from "axios";
import { config } from "../config";

export const userService = {
  getAll,
  login,
  signUp,
  updateUser,
  deleteUser,
  logout,
  getById,
};

const headers = {
  Authorization: "Bearer my-token",
  "My-Custom-Header": "foobar",
};

function getAll(role) {
  return new Promise((resolve, reject) => {
    if(role !== "admin"){
      return reject( {status: 403, message: "You have not permission to do it"})
    }
    return axios
      .get(`${config.mockApi}${config.login.getall}`, { headers })
      .then((res) => {
        return resolve(res.data);
      })
      .catch((error) => {
        console.log(error);
        return reject(error)
      });
  })
  
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
        return reject(error)
      });
  })
  
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}
function signUp() {}
function updateUser() {}
function deleteUser() {}
