import { getDataConst } from "./constant";

function requestGetAll(role) {
  return {
    type: getDataConst.GET_ALL_REQUEST,
    role,
  };
}

function requestGetById(id) {
  return {
    type: getDataConst.GET_BY_ID_REQUEST,
    id,
  };
}

export const getAction = {
  requestGetAll,
  requestGetById,
};
