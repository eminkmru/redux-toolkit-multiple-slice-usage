import { configureStore } from "@reduxjs/toolkit";
import { fromReducer } from "./slices/formSlice";
import { courseReducer } from "./slices/courseSlice";

export const store = configureStore({
  reducer: {
    form: fromReducer,
    courses: courseReducer,
  },
});
