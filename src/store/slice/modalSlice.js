import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open:false
};

export const modalSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
      toggleModal:(state)=>{
state.open= !state.open
      }
  },
});

// Action creators are generated for each case reducer function
export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
