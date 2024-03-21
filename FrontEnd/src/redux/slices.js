import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "Login",
  initialState: {
    token: null,
    userInfos: null,
  },

  reducers: {
    userToken: (state, action) => {
      state.token = action.payload;
    },
    userInfos: (state, action) => {
      state.userInfos = action.payload;
    },
  },
});
export const { userToken, userInfos } = loginSlice.actions;
export default loginSlice;
