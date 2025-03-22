import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthReady: true,
};

const userSlice = createSlice({
  name: " user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state, { payload }) => {
      state.user = null;
    },
    authIsReady: (state) => {
      state.isAuthReady = false;
    },
  },
});

export const { authIsReady, logOut, login } = userSlice.actions;
export default userSlice.reducer;
