import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./students/studentsReducers";

export const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});
