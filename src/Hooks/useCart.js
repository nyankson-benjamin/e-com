import  { useEffect, useState } from "react";
import { API } from "../Services/api";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../store/slice/cartSlice";

export default function useCart() {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alerts, setAlerts] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const {user} = useSelector(state=>state.userDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await API.get("/cart/?id=" + user._id);
        setLoading(false);
        setData(response?.data.cart);
        dispatch(setCart(response?.data.cart))
      } catch (error) {
        setLoading(false)
      }
    };
    fetch();
  }, []);

  const handleDelete = async (id, item) => {
    try {
      await API.delete(`/delete/cartItem/?userId=${user._id}&itemId=${id}`);

      const newCart = data?.filter((cart) => cart._id !== id);
      setData(newCart);
dispatch(setCart(newCart))
      setAlerts({
        open: true,
        message: item + " has been deleted successfully",
        severity: "info",
      });
    } catch (error) {
      console.log(error)
    }
  };



  const handleBuy = async (id, price, item, image, quantity) => {
  
      await API.delete("/Cart/" + id);
      const newCart = data?.filter((cart) => cart._id !== id);
      setData(newCart);
     
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    // setOpenAlert(false);
    setAlerts({
      open: false,
      message: "",
      severity: "",
    });
  };

  const puchaseItem = async(id)=>{
try {
 await API.post("/purchase", {userId:user._id, itemId:id})
} catch (error) {
  console.log("");
}
  }
  return [data, loading, handleDelete, handleBuy, alerts, handleCloseAlert, puchaseItem];
}
