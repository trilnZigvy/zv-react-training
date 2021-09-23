import { userConst } from "../constant/user.constant";

export function userReducer(state = { listUsers: [] }, action) {
  switch (action.type) {
    case userConst.GET_ALL_REQUEST:
      return { loading: true };
    case userConst.GET_ALL_SUCCESS:
      return { ...state, listUsers: action.user };
    case userConst.GET_ALL_FAILURE:
      return { listUsers: [], error: action.error };
    case userConst.GET_BY_ID_REQUEST:
      return state;
    case userConst.GET_BY_ID_SUCCESS:
      return { ...state, userById: action.user };
    case userConst.GET_BY_ID_FAILURE:
      return {
        ...state,
        userById: "NOT_FOUND",
        error: action.error.toString(),
      };
    default:
      return state;
  }
}
