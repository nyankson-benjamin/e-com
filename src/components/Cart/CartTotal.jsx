import PropTypes from "prop-types";
import ButtonComponent from "../Buttons/ButtonComponent";
import ModalComponent from "../modals/ModalComponent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paystack from "./Paystack";
import { setCart } from "../../store/slice/cartSlice";
import { TextField } from "@mui/material";
import useCheckOut from "../../Hooks/useCheckOut";
export default function CartTotal({ subtotal }) {
  const [openCheckOut, setOpenCheckOut] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const [userEmail, setUserEmail] = useState("");
  const [disbableButton, setDisbableButton] = useState(true);
  const dispatch = useDispatch();
  const [ isLoading, , purchaseMultipleItems ] =
    useCheckOut();

  const handleBuyItems = () => {
    purchaseMultipleItems();
  };
  const handlePurchase = () => {
    if (isLoggedIn) {
      handleBuyItems();
    } else {
      dispatch(setCart([]));
    }
  };

  useEffect(() => {
    const reg = /^\S+@\S+\.\S+$/;
    if (userEmail.match(reg)) {
      setDisbableButton(false);
    } else {
      setDisbableButton(true);
    }
  }, [userEmail]);
  return (
    <section className=" max-h-64 bg-white shadow-sm p-3 flex flex-col gap-6 font-bold">
      <h2 className="border-b-[1px] pb-3">CART SUMMARY</h2>

      <div className="border-b-[1px] flex justify-between pb-3">
        <h2>TOTAL</h2>
        <h2 className="">GHC {subtotal}</h2>
      </div>

      {!isLoggedIn ? (
        <ButtonComponent
          text={"Checkout " + subtotal}
          handleSubmit={() => setOpenCheckOut(true)}
        />
      ) : (
        <Paystack amount={subtotal} handlePurchase={handlePurchase} loading={isLoading} />
      )}

      <ModalComponent
        open={openCheckOut}
        handleClose={() => setOpenCheckOut(false)}
        title="Checkout"
      >
        <div
          className="w-full flex 
      items-center justify-center flex-col gap-3"
        >
          <TextField
            placeholder="Enter email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <Paystack
            amount={subtotal}
            handlePurchase={handlePurchase}
            disabled={disbableButton}
            email={userEmail}
          />
        </div>
      </ModalComponent>
    </section>
  );
}

CartTotal.propTypes = {
  subtotal: PropTypes.string,
};
