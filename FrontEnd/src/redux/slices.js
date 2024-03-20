import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "Login",
  initialState: { token: null },
  reducers: {
    token: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default loginSlice.reducer;
