import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      updateLoginState: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateLoginState } = authSlice.actions;

export default authSlice.reducer;
