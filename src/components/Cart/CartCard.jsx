import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import ButtonComponent from "../Buttons/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  mutateCartQuantity,
  removeFromCart,
} from "../../store/slice/cartSlice";
import ModalComponent from "../modals/ModalComponent";
import { useState, useEffect } from "react";
import { setAlert } from "../../store/slice/alertSlice";
import { API } from "../../Services/api";
import Paystack from "./Paystack";
import { TextField } from "@mui/material";
import useCheckOut from "../../Hooks/useCheckOut";
export default function CartCard({
  unitPrice,
  quantity,
  discountPercentage,
  item,
  itemId,
  _id,
  image,
  handleDeleteItem,
  deleteMsg,
}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const { user } = useSelector((state) => state.userDetails);
  const [isupdating, setIsupdating] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [disbableButton, setDisbableButton] = useState(
    isLoggedIn ? false : true
  );
  const [isLoading, handlePurchaseSingleItem] = useCheckOut();

  useEffect(() => {
    const reg = /^\S+@\S+\.\S+$/;
    if (!isLoggedIn) {
      if (userEmail.match(reg)) {
        setDisbableButton(false);
      } else {
        setDisbableButton(true);
      }
    }
  }, [isLoggedIn, userEmail]);
  const updateQuantity = async (qty) => {
    try {
      setIsupdating(true);
      const res = await API.patch("updatecartquantity/", {
        userId: user._id,
        itemId,
        quantity: qty,
      });
      dispatch(setAlert(["success", res?.data?.message, true]));
      setIsupdating(false);
    } catch (error) {
      dispatch(setAlert(["error", error.message, true]));
      setIsupdating(false);
    }
  };

  const handleMutateQuantity = (type) => {
    dispatch(mutateCartQuantity({ itemId, type }));
    const qty = type === "increase" ? (quantity += 1) : (quantity -= 1);

    if (isLoggedIn) {
      setTimeout(() => {
        updateQuantity(qty);
      }, 200);
    }
  };

  const handleToggleModal = () => {
    setOpen((prev) => !prev);
  };

  const handleDelete = () => {
    if (isLoggedIn) {
      handleDeleteItem(_id, item);
      if (deleteMsg === item + " has been deleted successfully") {
        dispatch(removeFromCart(itemId));
      }
    } else {
      dispatch(removeFromCart(itemId));
    }
    handleToggleModal();
  };

  const handleView = () => {
    setCheckout((prev) => !prev);
  };

  const getActualPrice = () => {
    return (unitPrice - (discountPercentage / 100) * unitPrice)?.toFixed(2);
  };

  const handlePurchase = async () => {
    if (isLoggedIn) {
      await handlePurchaseSingleItem(_id);
      handleView();
    } else {
      dispatch(removeFromCart(itemId));
    }
  };
  return (
    <div className="border-t-[1px] mt-5 pt-2 hover:shadow-sm hover:rounded-lg p-5">
      <div className="flex justify-between cursor-pointer" onClick={handleView}>
        <div className="flex gap-3">
          <figure>
            <img src={image} alt={item} className="w-28" />
          </figure>
          <h2>{item}</h2>
        </div>

        <div>
          <h2 className="font-bold">
            {!isNaN(getActualPrice()) ? (
              <s>GHC {unitPrice?.toFixed(2)}</s>
            ) : (
              <span>GHC {unitPrice?.toFixed(2)}</span>
            )}
          </h2>
          <div className="flex gap-4">
            <h2 className="">
              {!isNaN(getActualPrice()) ? `GHC ${getActualPrice()}` : ""}
            </h2>
            {!isNaN(getActualPrice()) && (
              <div className="bg-[#ffd231] p-0.5 rounded-lg">
                -{discountPercentage}%
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div
          className="flex items-center gap-1 cursor-pointer text-[#ffc801] hover:bg-[#ffd231] hover:text-[#fff] p-2 rounded-md"
          onClick={() => handleToggleModal()}
        >
          <DeleteIcon />
          <p className="">Remove</p>
        </div>
        <div className="flex items-center gap-3">
          <ButtonComponent
            text=""
            className={"w-3"}
            disabled={quantity <= 1 || isupdating}
            handleSubmit={() => handleMutateQuantity("decrease")}
          >
            <Remove />
          </ButtonComponent>
          {quantity}
          <ButtonComponent
            text=""
            className={"w-3"}
            disabled={isupdating}
            handleSubmit={() => handleMutateQuantity("increase")}
          >
            <Add />
          </ButtonComponent>
        </div>
      </div>
      <ModalComponent
        title="Remove from cart"
        open={open}
        handleClose={handleToggleModal}
      >
        <p>Do you really want to remove this item from cart?</p>
        <div className="flex items-center justify-center mt-5">
          <ButtonComponent
            className="w-full"
            text="Remove item"
            handleSubmit={handleDelete}
          />
        </div>
      </ModalComponent>

      <ModalComponent title="Checkout" open={checkout} handleClose={handleView}>
        <div className="flex flex-col min-w-[300px]">
          <div className="flex items-center justify-center w-full animate-pulse">
            <img src={image} alt={item} className="w-28" />

          </div>
          <div className="flex items-center justify-between my-5 gap-3 flex-col">
            <div className="flex justify-between items-center gap-2 w-full">
              <p>Product</p>
              <p className="font-bold">{item}</p>
            </div>
            <div className="flex justify-between items-center gap-2 w-full">
              <p>Unit price</p>
              <s>GHC {unitPrice?.toFixed(2)}</s>
            </div>
            <div className="flex justify-between items-center gap-2 w-full">
              <p> </p>
              <p>-{discountPercentage}%</p>
            </div>
            <div className="flex justify-between items-center gap-2 w-full">
              <p> </p>
              <p>GHC {getActualPrice()}</p>
            </div>

            <div className="flex justify-between items-center gap-2 w-full">
              <p>Quantity</p>
              <p>{quantity}</p>
            </div>
            <div className="flex justify-between items-center gap-2 w-full border-t-2">
              <p>Total</p>
              <p>GHC {(getActualPrice() * quantity).toFixed(2)}</p>
            </div>
          </div>
          {userEmail}
          {!isLoggedIn && (
            <TextField
              sx={{ my: 2 }}
              placeholder="Enter email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          )}
          <Paystack
            amount={(getActualPrice() * quantity).toFixed(2)}
            disabled={disbableButton || isLoading}
            handlePurchase={handlePurchase}
          />
        </div>
      </ModalComponent>
    </div>
  );
}

CartCard.propTypes = {
  image: PropTypes.string,
  item: PropTypes.string,
  quantity: PropTypes.number,
  unitPrice: PropTypes.number,
  totalPrice: PropTypes.number,
  purchased: PropTypes.bool,
  discountPercentage: PropTypes.number,
  itemId: PropTypes.number,
  _id: PropTypes.string,
  handleDeleteItem: PropTypes.func,
  deleteMsg: PropTypes.string,
};
