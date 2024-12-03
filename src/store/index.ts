import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import { loggerMiddleware } from "./middleware/logger";

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
