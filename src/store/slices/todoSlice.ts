import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Todo interface
interface Todo {
  id: string;
  title: string;
  status: "active" | "completed";
  date: string;
  createdAt: string;
}

// Define the state interface
interface TodoState {
  todos: Todo[];
}

// Initial state
const initialState: TodoState = {
  todos: [],
};

// Create the slice
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },

    clear(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    update(state, action: PayloadAction<{ id: string; title: string, description: string, status: "active" | "completed" }>) {
      const { id, title, description, status } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, title, description, status } : todo
      );
    },
  },
});

// Export actions and reducer
export const { add, clear, update } = todoSlice.actions;
export default todoSlice.reducer;
