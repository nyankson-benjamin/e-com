import { useState, useEffect } from "react";
import { API } from "../Services/api";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, closeAlert } from "../store/slice/cartSlice";
import { setAlert as setAlerts } from "../store/slice/alertSlice";

export default function useAddToCart(product) {
  const [value, setValue] = useState(product.quantity ?? 1);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const { user } = useSelector((state) => state.userDetails);
    const location = useLocation();

  //TODO: refactor the alert system
  useEffect(() => {
    if (value < 0) {
      setValue(0);
    } else if (value === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }

    // }
  }, [value]);

 

  const price =
    product?.price - (product?.discountPercentage / 100) * product?.price;

  const totalPrice =
    (
      product?.price -
      (product?.discountPercentage / 100) * product?.price
    ).toFixed(2) * value;


  const handleAddToCart = async () => {
    try {
      if (!isLoggedIn) {
        localStorage.setItem("userPrevLocation", location.pathname);

        const data = {
          item: product.title,
          image: product.images.length ? product.images[0] : product.thumbnail,
          quantity: value,
          email: user.email,
          unitPrice: price,
          totalPrice: totalPrice,
          itemId: product.id,
          discountPercentage:product.discountPercentage
        };
        dispatch(addToCart({ data, quantity: value }));
        dispatch(setAlerts(["success", "item added to cart", true]))
        setTimeout(() => {
          navigate("/cart");
        }, 3000);
        setTimeout(() => {
          dispatch(closeAlert());
        }, 3000);

      } else {
        setDisable(true)
        const response = await API.post("/addtocart", {
          item: product.title,
          image: product.thumbnail,
          quantity: value,
          email: user.email,
          unitPrice: price,
          totalPrice: totalPrice,
          itemId: product.id,
          discountPercentage:product.discountPercentage
        });
        setDisable(false)

          dispatch(setAlerts(["success", response.data.message, true]))
          setTimeout(() => {
            navigate("/cart");
          }, 3000);
        }
      
    } catch (error) {
      if (error.message === "Network Error") {
  
        dispatch(setAlerts(["error", "There was an error adding to cart", true]))
      } else {

        dispatch(setAlerts(["error", error?.response.data.message, true]))
      }
      setDisable(false)
    }

  };

  
  const Update = async (price, value,) => {
    const quantity = value;
    const totalPrice = price;
    const data = { totalPrice, quantity };
    await API.put(`Cart/${3}`, { ...data });
  };


  return {
    handleAddToCart,
    Update,
    disable,
    value,
    setValue,
  };
}
