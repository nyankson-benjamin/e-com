import { useState } from "react";
import { API } from "../Services/api";
import { useSelector, useDispatch } from "react-redux";
import { setCart, removeFromCart } from "../store/slice/cartSlice";
import { setAlert } from "../store/slice/alertSlice";

export default function useCheckOut() {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useSelector((state) => state.userDetails);
  const { cart } = useSelector((state) => state.cartItem);

  const dispatch = useDispatch();
  const handlePurchaseSingleItem = async (itemId) => {
    try {
      setIsLoading(true);
      const response = await API.post("/purchase", {
        userId: user._id,
        itemId,
      });
      if (response.data) {
        dispatch(setAlert(["success", response?.data.message, true]));
        dispatch(removeFromCart(itemId));
    }

      setIsLoading(false);
    } catch (error) {
      dispatch(setAlert(["error", error.message, true]));
      setIsLoading(false);
    }
  };

  const purchaseMultipleItems = async () => {
    const itemIds = cart?.map((item) => item?._id);
    try {
      setIsLoading(true);
      const response = await API.post("/purchasemultiple", {
        userId: user._id,
        itemIds,
      });
      if (response.data) {
        dispatch(setAlert(["success", response?.data.message, true]));
        dispatch(setCart([]));
        
    }

      setIsLoading(false);
    } catch (error) {
      dispatch(setAlert(["error", error.message, true]));
      setIsLoading(false);
    }
  };

  return [isLoading, handlePurchaseSingleItem, purchaseMultipleItems];
}
