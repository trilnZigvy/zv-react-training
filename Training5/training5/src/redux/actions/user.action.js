import { userConst } from "../constant/user.constant";
import { userService } from "../services/user.service";

export const userAction = {
  login,
  getAll,
  logout,
  getById,
};

function login(email, password) {
  return async (dispatch) => {
    dispatch(request());
    await userService.login(email, password).then(
      (user) => dispatch(success(user)),
      (error) => dispatch(failure(error))
    );
  };
  function request() {
    return { type: userConst.LOGIN_REQUEST };
  }
  function success(user) {
    return user
      ? { type: userConst.LOGIN_SUCCESS, user }
      : { type: userConst.LOGIN_FAILURE, error: "login fail" };
  }
  function failure(error) {
    return { type: userConst.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConst.LOG_OUT };
}

function getAll(role) {
  return async (dispatch) => {
    dispatch(request());
    await userService.getAll(role).then(
      (user) => dispatch(success(user)),
      (error) => dispatch(failure(error))
    );
  };
  function request() {
    return { type: userConst.GET_ALL_REQUEST };
  }
  function success(user) {
    return { type: userConst.GET_ALL_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConst.GET_ALL_FAILURE, error };
  }
}

function getById(id) {
  return async (dispatch) => {
    dispatch(request());
    await userService
      .getById(id)
      .then((user) => {
        dispatch(success(user));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
      });
  };
  function request() {
    return { type: userConst.GET_BY_ID_REQUEST };
  }
  function success(user) {
    return { type: userConst.GET_BY_ID_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConst.GET_BY_ID_FAILURE, error };
  }
}
