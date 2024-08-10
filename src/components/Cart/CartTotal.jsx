import PropTypes from "prop-types";
import ButtonComponent from "../Buttons/ButtonComponent";
import ModalComponent from "../modals/ModalComponent";
import { useState } from "react";
import SignIn from "../User/SignIn";
import useLogin from "../../Hooks/useLogin";
import { useSelector } from "react-redux";


export default function CartTotal({ subtotal }) {
    const [open, setOpen] = useState(false)
    const [openCheckOut, setOpenCheckOut] = useState(false);
    const isLoggedIn = useSelector((state) => state.auth.loggedIn)

    const [
        handleSubmit,
        email,
        password,
        disable,
        handleEmail,
        handlePassword,
        handleLogOut,
        alert,
        handleCloseAlert,
        isLoading
      ] = useLogin();

      const handleCheckOut = ()=>{
if(!isLoggedIn){
localStorage.setItem("userPrevLocation", window.location)
  setOpen(true)
}
else{
  setOpenCheckOut(true)
}
      }
  return (
    <section className=" max-h-64 bg-white shadow-sm p-3 flex flex-col gap-6">
      <h2 className="border-b-[1px] pb-3">CART SUMMARY</h2>

      <div className="border-b-[1px] flex justify-between pb-3">
      <h2 >Subtotal</h2>
      <h2 className="font-bold">GHC {subtotal}</h2>
      </div>

      <ButtonComponent text={`Checkout (${subtotal})`} handleSubmit={()=>handleCheckOut()} />

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
Checkout
      </ModalComponent>
    </section>
  );
}

CartTotal.propTypes = {
  subtotal: PropTypes.string,
};
