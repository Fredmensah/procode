import { Todo } from "../../interfaces/todo.interface";
import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  CLEAR_TODOS,
} from "../../constants/todo";

export const addTodo = (todos: Todo) => ({
  type: ADD_TODO,
  payload: todos,
});

export const removeTodo = (id: string) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const updateTodo = (id: string, title: string) => ({
  type: UPDATE_TODO,
  payload: { id, title },
});

export const clearTodos = () => ({
  type: CLEAR_TODOS,
});
