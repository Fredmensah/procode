// store/middleware/logger.ts
import { Middleware } from "@reduxjs/toolkit";

export const loggerMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    // Log the action type and payload
    console.log("Dispatching action:", action);

    // Call the next middleware or reducer
    const result = next(action);

    // Log the updated state
    console.log("Next state:", storeAPI.getState());

    return result;
  };
