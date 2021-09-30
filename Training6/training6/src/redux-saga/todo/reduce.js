import { todoConst } from "./constant";
// let task = JSON.parse(localStorage.getItem("task"))
//   ? JSON.parse(localStorage.getItem("task"))
//   : [];

// let index = JSON.parse(localStorage.getItem("index"))
//   ? JSON.parse(localStorage.getItem("index"))
//   : 0;

// let queue = JSON.parse(localStorage.getItem("queue"))
//   ? JSON.parse(localStorage.getItem("queue"))
//   : [];
const initialState = { task: [], queue: [], index: 0, online: false };

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case todoConst.ONLINE:
      return { ...state, online: true };
    case todoConst.OFFLINE:
      return { ...state, online: false };
    case todoConst.ADD_TASK:
      return { ...state, adding: true };
    case todoConst.ADD_SUCCESS:
      let index = state.index;
      action.data.id = index;
      index += 1;
      // localStorage.setItem("index", JSON.stringify(index));
      // localStorage.setItem(
      //   "task",
      //   JSON.stringify([...state.task, action.data])
      // );
      return { ...state, task: [...state.task, action.data], index: index };
    case todoConst.ADD_FAILURE:
      return state;
    case todoConst.DRAFT:
      return { ...state, drafting: true };
    case todoConst.DRAFT_SUCCESS:
      // localStorage.setItem(
      //   "task",
      //   JSON.stringify(
      //     state.task.map((e) => {
      //       return e.id === action.data.id ? Object.assign(e, action.data) : e;
      //     })
      //   )
      // );
      return {
        ...state,
        task: state.task.map((e) => {
          return e.id === action.data.id ? Object.assign(e, action.data) : e;
        }),
      };
    case todoConst.DRAFT_FAILURE:
      return state;
    case todoConst.READY:
      return { ...state, ready: true };
    case todoConst.READY_SUCCESS:
      console.log(action.task);
      // localStorage.setItem(
      //   "task",
      //   JSON.stringify(
      //     state.task.map((e) => {
      //       return e.id === action.data.id ? Object.assign(e, action.data) : e;
      //     })
      //   )
      // );
      return {
        ...state,
        task: state.task.map((e) => {
          return e.id === action.task.id ? Object.assign(e, action.task) : e;
        }),
        queue: [...state.queue, action.task],
      };
    case todoConst.READY_FAILURE:
      return state;
    case todoConst.SUBMMITING:
      action.task.status = "Submitting";
      return {
        ...state,
        task: state.task.map((e) => {
          return e.id === action.task.id ? Object.assign(e, action.task) : e;
        }),
      };
    case todoConst.SUBMIT_SUCCESS:
      return {
        ...state,
        task: state.task.map((e) => {
          return e.id === action.data.id ? Object.assign(e, action.data) : e;
        }),
      };
    case todoConst.SUBMIT_ERROR:
      return {
        ...state,
        task: state.task.map((e) => {
          return e.id === action.data.id ? Object.assign(e, action.data) : e;
        }),
      };
    case todoConst.NETWORK: {
      return { ...state, online: action.status };
    }
    case todoConst.REMOVE_ALL:
      return { ...state, task: [], queue: [], index: 0 };
    default:
      return state;
  }
}
