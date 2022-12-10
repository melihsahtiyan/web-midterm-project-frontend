import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const dataURL =
  "http://127.0.0.1:2727/api/v1//flights/4efcc85b-7683-4a99-a908-94a2ec54e584";

const initialState = {
  loading: false,
  data: [{}],
  error: "",
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  // first argument is action type
  const response = await axios.get(dataURL);
  return response.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default dataSlice.reducer;
