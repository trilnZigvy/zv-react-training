import { todoConst } from "../constant/todo.contant";

export function todoReducer(state = {}, action) {
  switch (action.type) {
    case todoConst.GET_REQUEST:
      return { loading: true };
    case todoConst.GET_SUCCESS:
      return { items: action.task };
    case todoConst.GET_FAILURE:
      return { error: action.error };
    case todoConst.ADD_REQUEST:
      return state;
    case todoConst.ADD_SUCCESS:
      
      let a = { ...state, items: [...state.items, action.task] };
      console.log("action", a);
      return { ...state, items: [...state.items, action.task] };
    case todoConst.ADD_FAILURE:
      return state;
    case todoConst.UPDATE_REQUEST:
      return state;
    case todoConst.UPDATE_SUCCESS:
      return {
        ...state,
        items: state.items.map((e) => {
          return e.id === action.task.id ? Object.assign(e, action.task) : e;
        }),
      };
    case todoConst.UPDATE_FAILURE:
      return state;
    case todoConst.DELETE_REQUEST:
      return state;
      // return {
      //   ...state,
      //   items: state.items.map((task) => {
      //     task.id === action.tasks.id ? { ...task, deleting: true } : task;
      //   }),
      // };
    case todoConst.DELETE_SUCCESS:
      return {
        items: state.items.filter((task) => task.id !== action.task.id),
      };
    case todoConst.DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map((task) => {
          if (task.id === action.task.id) {
            // make copy of task without 'deleting:true' property
            const { deleting, ...taskCopy } = task;
            // return copy of task with 'deleteError:[error]' property
            return { ...taskCopy, deleteError: action.error };
          }
          return task;
        }),
      };
    default:
      return state;
  }
}
