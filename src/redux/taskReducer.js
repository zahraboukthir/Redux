import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "./actionTypes";
const init = {
  tasks: [
    {
      action: "wake up",
      isDone: true,
      id: Math.random(),
    },
  ],
};

const taskReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === payload ? { ...item, isDone: !item.isDone } : item
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === payload.id
            ?payload
            : item
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;
