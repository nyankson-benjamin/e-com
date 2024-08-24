import ButtonComponent from "../Buttons/ButtonComponent";
import ModalComponent from "../modals/ModalComponent";
import { useState } from "react";
import SignIn from "../User/SignIn";
import useLogin from "../../Hooks/useLogin";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function CartTotal() {
    const [open, setOpen] = useState(false)
    const [openCheckOut, setOpenCheckOut] = useState(false);
    const isLoggedIn = useSelector((state) => state.auth.loggedIn)
    const { cart: localItem } = useSelector((state) => state.cartItem);
    const location = useLocation();

    let subtotal=0;
    let totalQuantity =0;
    let totalPrice = 0;
    let totalDiscount = 0;
    for (const element of localItem) {
      subtotal += element?.unitPrice * element?.quantity;
      totalPrice += element.unitPrice
      totalQuantity +=element.quantity;
      totalDiscount += element.discountPercentage;
    }
    const [
        handleSubmit,
        email,
        password,
        disable,
        handleEmail,
        handlePassword,
        ,
        alert,
        handleCloseAlert,
        isLoading
      ] = useLogin();

      const handleCheckOut = ()=>{
if(!isLoggedIn){
localStorage.setItem("userPrevLocation", location.pathname)
  setOpen(true)
}
else{
  setOpenCheckOut(true)
}
      }

      const handlePurchase = ()=>{

      }
  return (
    <section className=" max-h-64 bg-white shadow-sm p-3 flex flex-col gap-6">
      <h2 className="border-b-[1px] pb-3">CART SUMMARY</h2>

      <div className="border-b-[1px] flex justify-between pb-3">
      <h2 >Subtotal</h2>
      <h2 className="font-bold">GHC {subtotal.toFixed(2)}</h2>
      </div>

      <ButtonComponent text={`Checkout (${subtotal.toFixed(2)})`} handleSubmit={()=>handleCheckOut()} />

      <ModalComponent open={open} handleClose={()=>setOpen(false)}>
<div className="flex justify-center w-full">
    
<SignIn  handleCloseAlert={handleCloseAlert} mt="0px"
              email={email}
              handleEmail={handleEmail}
              password={password}
              handlePassword={handlePassword}
              alert={alert}
              disable={disable}
              handleSubmit={handleSubmit}
              isLoading={isLoading}/>
</div>
      </ModalComponent>

      <ModalComponent open={openCheckOut} handleClose={()=>setOpenCheckOut(false)}>
<p className="text-center uppercase pb-2 font-bold">Checkout</p>
 <div className="flex flex-col gap-3">
 <div className="flex items-center justify-between">
 <p>Total Price: </p>
 <p>GHC {totalPrice.toFixed(2)}</p>
 </div>
 <div className="flex justify-between">
 <p>Total Quantity: </p>
 <p>{totalQuantity.toFixed(2)}</p>
 </div>
<div className="flex justify-between">
<p>Total Discount:</p>
<p> {totalDiscount.toFixed(2)}%</p>

</div>
<ButtonComponent text={`Checkout (${subtotal.toFixed(2)})`} handleSubmit={handlePurchase}/>
</div>
      </ModalComponent>
    </section>
  );
}