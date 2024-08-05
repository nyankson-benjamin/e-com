import React, { useEffect, useState } from "react";
import { API } from "../Services/api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function useCart() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [salesData, setSalesData] = useState();
  const [alerts, setAlerts] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const navigate = useNavigate();
  const {user} = useSelector(state=>state.userDetails)

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await API.get("/cart/?id=" + user._id);
        setLoading(false);
        setData(response?.data.cart);
      } catch (error) {}
    };
    fetch();
  }, []);

  const handleDelete = async (id, item) => {
    try {
      await API.delete(`/delete/cartItem/?userId=${user._id}&itemId=${id}`);

      const newCart = data?.filter((cart) => cart._id !== id);
      setData(newCart);

      setAlerts({
        open: true,
        message: item + " has been deleted successfully",
        severity: "info",
      });
    } catch (error) {}
  };



  const handleBuy = async (id, price, item, image, quantity) => {
    const buyDate = new Date();
    const year = buyDate.getFullYear();
    const month = buyDate.getMonth() + 1;
    const day = buyDate.getDate();
    const date = `${day}-${month}-${year}`;

    const sales = { price, item, image, quantity, date };

    const salesItem = salesData?.find((items) => items.item === item);

    if (salesItem) {
      await API.delete("/Cart/" + id);
      const newCart = data?.filter((cart) => cart._id !== id);
      setData(newCart);
    } else {
      try {
        await API.post("/Sales", { ...sales });
        setAlerts({
          open: true,
          message: "You have successfully buy the product",
          severity: "info",
        });

        setTimeout(() => {
          navigate("/cart");
        }, 5000);

        await API.delete("/Cart/" + id);
        const newCart = data?.filter((cart) => cart.id !== id);
        setData(newCart);
      } catch (error) {}
    }
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
