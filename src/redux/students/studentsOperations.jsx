import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://test-task-j.herokuapp.com/data";

const fetchStudents = createAsyncThunk(
  "students/fetchStudentsStatus",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("?page=1&size=20");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default fetchStudents;
