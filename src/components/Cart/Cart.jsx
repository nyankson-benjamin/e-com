import useCart from "../../Hooks/useCart";
import Alerts from "../Alert/Alerts";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import CartTotal from "./CartTotal";
import { Grid } from "@mui/material";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const [data, loading, handleDelete, handleBuy, alerts, handleCloseAlert] =
    useCart();

  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const { cart: localItem } = useSelector((state) => state.cartItem);
 

  let sum = 0;

  // iterate over each item in the array
  for (const element of localItem) {
    sum += element?.unitPrice * element?.quantity;
  }

  return (
    <div className="my-7">
      <Alerts alert={alerts} handleCloseAlert={handleCloseAlert} />
{loading && <div>Loading...</div>}
      {<Grid container spacing={2} justifyContent={"center"}>
       {localItem.length ? <Grid item xs={10} lg={7} md={6}>
          <section className="bg-white p-3 shadow-md">
            <h2 className="text-left font-bold">
              Cart ({localItem?.length})
            </h2>
            {localItem?.map((item) => (
              <CartCard
                key={item.itemId}
                item={item}
                handleDeleteItem={handleDelete}
              />
            ))}
            
          </section>
        </Grid> : <EmptyCart/>}

        {sum > 0 && (
          <Grid item xs={10} lg={3} md={4}>
            <CartTotal subtotal={sum.toFixed(2)} />
          </Grid>
        )}
      </Grid>
      
      }
    </div>
  );
}
