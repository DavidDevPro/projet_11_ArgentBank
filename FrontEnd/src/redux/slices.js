import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "Login",
  initialState: {
    token: null,
    userInfos: null,
  },

  reducers: {
    // ce reducer me permet de mettre à jour le token
    userToken: (state, action) => {
      state.token = action.payload;
    },

    // et ce reducer me permet de mettre à jour l'état de userInfos
    userInfos: (state, action) => {
      state.userInfos = action.payload;
    },
  },
});

// attention!!!
// premier export des actions générées par createSlice
// et le deuxième export pour utiliser cette slice dans le store
export const { userToken, userInfos } = loginSlice.actions;
export default loginSlice;
