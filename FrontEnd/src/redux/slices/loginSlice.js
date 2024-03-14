import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, userProfile } from "../services/api";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const token = await login(credentials);
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const profileUser = createAsyncThunk(
  "login/profileUser",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().login.token;
      console.log("token", token);
      const profile = await userProfile(token);
      return profile;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// initialisation du slice loginSlice
const initialState = {
  token: null,
  status: "idle",
  error: null,
  user: null,
};

// création du loginSlice
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // gestion des actions asynchrones et de leurs états
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(profileUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(profileUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(profileUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// export du reducer du slice
export default loginSlice.reducer;
