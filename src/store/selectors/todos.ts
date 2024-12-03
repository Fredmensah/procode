import { TodoState } from "../../interfaces/todo.interface";

export const selectTodos = (state: { todos: TodoState }) => state.todos.todos;

export const selectActiveTodos = (state: { todos: TodoState }) =>
  state.todos.todos.filter((todo) => todo.status === "active");

export const selectCompletedTodos = (state: { todos: TodoState }) =>
  state.todos.todos.filter((todo) => todo.status === "completed");
