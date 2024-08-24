import { useState, useEffect } from "react";
import { API } from "../Services/api";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, closeAlert } from "../store/slice/cartSlice";

export default function useAddToCart(product) {
  const [value, setValue] = useState(1);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const cart = useSelector((state) => state.cartItem);
  const { user } = useSelector((state) => state.userDetails);
  const [alert, setAlert] = useState(cart.alert);
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
    product.price - (product.discountPercentage / 100) * product.price;

  const totalPrice =
    (
      product.price -
      (product.discountPercentage / 100) * product.price
    ).toFixed(2) * value;


  const handleAddToCart = async () => {
    try {
      if (!isLoggedIn) {
        localStorage.setItem("userPrevLocation", location.pathname);

        const data = {
          item: product.title,
          image: product.thumbnail,
          quantity: value,
          email: user.email,
          unitPrice: price,
          totalPrice: totalPrice,
          itemId: product.id,
          discountPercentage:product.discountPercentage
        };
        dispatch(addToCart({ data, quantity: value }));
        setTimeout(() => {
          dispatch(closeAlert());
          navigate("/cart");
        }, 3000);

      } else {
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
       
          setAlert({
            open: true,
            message: response.data.message,
            severity: "success",
          });

          setTimeout(() => {
            navigate("/cart");
          }, 3000);
        }
      
    } catch (error) {
      if (error.message === "Network Error") {
        setAlert({
          open: true,
          message: `There was an error adding to cart`,
          severity: "error",
        });
      } else {
        setAlert({
          open: true,
          message: error?.response.data.message,
          severity: "error",
        });
      }
    }

    setTimeout(() => {
      setAlert({
        open: false,
        message: ``,
        severity: "",
      });
    }, 3000);
  };

  const handleClose = () => setOpen(false);
  const Update = async (price, value,) => {
    const quantity = value;
    const totalPrice = price;
    const data = { totalPrice, quantity };
    await API.put(`Cart/${3}`, { ...data });
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({
      open: false,
      message: "",
      severity: "",
    });
  };

  return {
    handleAddToCart,
    handleClose,
    Update,
    handleCloseAlert,
    alert,
    open,
    disable,
    value,
    setValue,
  };
}
