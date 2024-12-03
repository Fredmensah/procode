// store/reducers/todoReducer.ts
import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  CLEAR_TODOS,
} from "../../constants/todo";
import { TodoState } from "../../interfaces/todo.interface";

// Initial state
const initialState: TodoState = {
  todos: [],
};

const todoReducer = (state = initialState, action: any): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.title, description: action.payload.description }
            : todo
        ),
      };
    case CLEAR_TODOS:
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};

export default todoReducer;
