import { createSlice } from "@reduxjs/toolkit";
import fetchStudents from "./studentsOperations";

const initialState = {
  students: [],
  filter: "",
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchStudents.fulfilled]: (state, action) => {
      state.students = action.payload;
    },
  },
});

export const { updateFilter } = studentsSlice.actions;

export default studentsSlice.reducer;
