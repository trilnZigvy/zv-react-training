import { todoConst } from "../constant/todo.contant";
import { todoService } from "../services/todo.services";
export const todoAction = {
  getAll,
  addTask,
  updateTask,
  deleteTask,
};

function getAll() {
  return async (dispatch) => {
    dispatch(request());
    await todoService.getAll().then(
      (tasks) => dispatch(success(tasks)),
      (error) => dispatch(failure(error.toString()))
    );
  };
  function request() {
    return { type: todoConst.GET_REQUEST };
  }
  function success(task) {
    return { type: todoConst.GET_SUCCESS, task };
  }
  function failure(error) {
    return { type: todoConst.GET_FAILURE, error };
  }
}

function addTask(task) {
  return (dispatch) => {
    dispatch(request());
    todoService.addTask(task).then(
      (task) => {
        dispatch(success(task));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
  function request(task) {
    return { type: todoConst.ADD_REQUEST, task };
  }
  function success(task) {
    return { type: todoConst.ADD_SUCCESS, task };
  }
  function failure(error) {
    return { type: todoConst.ADD_FAILURE, error };
  }
}

function updateTask(id, task, completed, createAt) {
  return (dispatch) => {
    dispatch(request());
    todoService.updateTask(id, task, completed, createAt).then(
      (task) => {
        dispatch(success(task));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
  function request(task) {
    return { type: todoConst.UPDATE_REQUEST, task };
  }
  function success(task) {
    return { type: todoConst.UPDATE_SUCCESS, task };
  }
  function failure(error) {
    return { type: todoConst.UPDATE_FAILURE, error };
  }
}

function deleteTask(id) {
  return (dispatch) => {
    dispatch(request());
    todoService.deleteTask(id).then(
      (task) => {
        dispatch(success(task));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
  function request(task) {
    return { type: todoConst.DELETE_REQUEST, task };
  }
  function success(task) {
    return { type: todoConst.DELETE_SUCCESS, task };
  }
  function failure(error) {
    return { type: todoConst.DELETE_FAILURE, error };
  }
}
