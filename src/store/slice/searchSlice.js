import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
  name: "auth",
  initialState:{
    searchItem:""
  },
  reducers: {
      updateSearchItem: (state, action) => {
      state.searchItem = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSearchItem } = searchSlice.actions;

export default searchSlice.reducer;
