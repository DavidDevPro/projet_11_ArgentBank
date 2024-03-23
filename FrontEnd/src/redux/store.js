import { configureStore } from "@reduxjs/toolkit";
// attention!!! bien importer la slice loginSlice
import loginSlice from "./slices";
//
//
//
// configuration du store Redux en utilisant configureStore
export const store = configureStore({
  reducer: {
    // configuration du reducer de la slice Login
    Login: loginSlice.reducer,
  },
});

export default store;
