import React, { useEffect } from "react";
import useCart from "../../Hooks/useCart";
import { useParams } from "react-router-dom";
import AppsBar from "../../TopBar/AppBar";
import { Alert, Button } from "@mui/material";
import Alerts from "../Alert/Alerts";
export default function Buy() {
  const { id } = useParams();
  const [data, loading, handleDelete, handleBuy, alerts, handleCloseAlert, puchaseItem] =
    useCart();

  const cartitem = data?.find((cart) => cart._id === (id));

  return (
    <div>
      <AppsBar />
      <Alerts alert={alerts} handleCloseAlert={handleCloseAlert} />
      {cartitem && (
        <div>
          <p>{cartitem.item}</p>
          <p>{cartitem.totalPrice}</p>
          <Button
            onClick={() => puchaseItem(cartitem._id)
              // handleBuy(
              //   cartitem.id,
              //   cartitem.totalPrice,
              //   cartitem.item,
              //   cartitem.img_link,
              //   cartitem.quantity
              // )
            }
          >
            Buy
          </Button>
        </div>
      )}
    </div>
  );
}
