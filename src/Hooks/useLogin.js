import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../Services/api";
import { useDispatch } from 'react-redux';
import { updateLoginState } from "../store/slice/authSlice";
import { setUser } from "../store/slice/userSlice";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { removeFromCart } from "../store/slice/cartSlice";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const {cart:cartItem} = useSelector(state=>state.cartItem)
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });
  
  const reg = /^\S+@\S+\.\S+$/;

  useEffect(() => {
    if (email.match(reg) && password !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  useEffect(() => {
    if (localStorage.getItem("userDetails")) {
      navigate("/");
    }
  }, [navigate]);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const addCartItems = async()=>{
try {
  const res = await API.post("/bulkAddToCart", {email, items:cartItem})
if(res.data.message==="Process completed"){
  cartItem?.forEach(item=>{
    dispatch(removeFromCart(item?.itemId))
  })
}
} catch (error) {
  
}
  }

  const handleSubmit = async () => {
    const location = localStorage.getItem("userPrevLocation");

    try {
      setIsLoading(true);
      const response = await API.post("/user/login", { email, password });
      const { accessToken, refreshToken } = response.data.data;

      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken)
      dispatch(setUser(jwtDecode(accessToken)));
      dispatch(updateLoginState(true));
      setAlert({
        open: true,
        message: "Login successful",
        severity: "success",
      });
console.log("cart", cartItem)
      if(cartItem?.length>0){
        addCartItems()
      }

      setTimeout(() => {
        if (location) {
          navigate(`${location.slice(21)}`);
          localStorage.removeItem("userPrevLocation");
        } else {
          navigate("/");
        }
        setIsLoading(false);
      }, 4000);
    } catch (error) {
      let errorMessage = "An error occurred";
      if (error.response) {
        errorMessage = error.response.data || error.message;
      } else if (error.message === "Network Error") {
        errorMessage = "Network error. Please try again later.";
      }
      setAlert({
        open: true,
        message: errorMessage,
        severity: "error",
      });
      setTimeout(() => {
        setAlert({
          open:false
        })
      }, 3000);
      setIsLoading(false);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userDetails");
    dispatch(updateLoginState(false));
    navigate("/login");
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

  return [
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
  ];
}
