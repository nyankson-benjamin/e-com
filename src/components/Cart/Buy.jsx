import useCart from "../../Hooks/useCart";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Alerts from "../Alert/Alerts";
export default function Buy() {
  const { id } = useParams();
  const [data, loading, handleDelete, handleBuy, alerts, handleCloseAlert, puchaseItem] =
    useCart();

  const cartitem = data?.find((cart) => cart._id === (id));

  return (
    <div>
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
