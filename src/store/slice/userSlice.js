import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
        cart: [],
    confirmPass:"",
    contact: "",
    country: "",
    email: "",
    fname: "",
    isAdmin: false,
    isVerified: true,
    lname: "",
    otp: "",
    password: "",
    _id: "",
    }
};

export const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
      setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
