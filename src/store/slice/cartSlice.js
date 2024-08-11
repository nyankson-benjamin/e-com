import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart:[],
  alert:{
    open:false,
    severity:"",
    message:""
  },
  cartBuckup:[]
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
      addToCart: (state, action) => {
   const itemExists = state.cart?.find(item=>item.itemId === action.payload.data.itemId)

   if(itemExists){
    if(itemExists.quantity === action.payload.quantity){
    state.alert.open = true;
    state.alert.message = `Item already exists`;
    state.alert.severity = "info";
    }
    else{
        itemExists.quantity=action.payload.quantity;
        console.log("updated")
        state.alert.open = true;
    state.alert.message = `Quantity updated successfully`;
    state.alert.severity = "success";
    }
   }
   else{
    state.cart = [...state.cart, {...action.payload.data}]
    state.alert.open = true;
    state.alert.message = action.payload.data.item + " has been added to the cart";
    state.alert.severity = "success";
   }

},
removeFromCart:(state, action)=>{
state.cart = state.cart.filter(item=>item.itemId !== action.payload)
},
closeAlert:(state)=>{
    state.alert.open=false;
},
setCart:(state, {payload})=>{
state.cart = payload
},

mutateCartQuantity:(state, {payload})=>{
const cartItem = state.cart.find(item=>item.itemId === payload.itemId)

if(cartItem){
    if(payload.type === "increase"){
        cartItem.quantity +=1
    }

    else{
        cartItem.quantity -=1

    }
}

},
setBackUpCart:(state)=>{
  state.cartBuckup = state.cart
}
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, closeAlert,removeFromCart, setCart, mutateCartQuantity, setBackUpCart } = cartSlice.actions;

export default cartSlice.reducer;
