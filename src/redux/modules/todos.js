const ADD_LIST = "ADD_LIST";
const REMOVE_Btn = "REMOVEBTN";
const Change_Btn = "changeBtn";
const Find_id = "Find_id";
const Re_Rander = "ReRander";

export const ADDLIST = (payload) => {
  return {
    type: ADD_LIST,
    payload,
  };
};
export const ChangeBtn = (id) => {
  return {
    type: Change_Btn,
    id,
  };
};
export const REMOVEBtn = (id) => {
  return {
    type: REMOVE_Btn,
    id,
  };
};
export const FindID = (id) => {
  return {
    type: Find_id,
    id,
  };
};
export const ReRander = (id) => {
  return {
    type: Re_Rander,
    id,
  };
};

const initialState = {
  todos: [
    {
      id: "1",
      title: "신나는항해시간",
      desc: "리액트를 배워봐요",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    desc: "",
    isDone: false,
  },
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case Change_Btn:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    case REMOVE_Btn:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case Find_id:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.id;
        }),
      };
    case Re_Rander:
      return state;

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
