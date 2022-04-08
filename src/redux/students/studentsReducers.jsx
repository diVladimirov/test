import { createSlice } from "@reduxjs/toolkit";
import fetchStudents from "./studentsOperations";

const initialState = {
  students: [],
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStudents.fulfilled]: (state, action) => {
      state.students = action.payload;
    },
  },
});

export default studentsSlice.reducer;
