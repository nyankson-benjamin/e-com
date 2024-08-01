import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  severity: "",
  message:"",
  open:false
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
      setAlert: (state, action) => {
    state.severity=action.payload[0]
      state.message=action.payload[1]
      state.open=action.payload[2]

      setTimeout(() => {
        state.open=false
      }, 3000);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;
