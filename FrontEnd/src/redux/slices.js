import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "Login",
  initialState: {
    token: null,
    userName: null,
    firstName: null,
    lastName: null,
  },

  reducers: {
    token: (state, action) => {
      state.token = action.payload;
    },
    userName: (state, action) => {
      state.userInfos = action.payload;
    },
    firstName: (state, action) => {
      state.firstName = action.payload;
    },
    lastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});
export const { token, userName, firstName, lastName } = loginSlice.actions;
export default loginSlice;
