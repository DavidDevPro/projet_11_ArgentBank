import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices";

// configuration du store Redux en utilisant configureStore
export const store = configureStore({
  reducer: {
    Login: loginSlice,
  },
});

export default store;
