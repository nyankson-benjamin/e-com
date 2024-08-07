import { useEffect, useState } from "react";
import useCart from "../../Hooks/useCart";
import CartTable from "./CartTable";
import Alerts from "../Alert/Alerts";
import CartCard from "./CartCard";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart,  } from "../../store/slice/cartSlice";

export default function Cart() {
  const [data, loading, handleDelete, handleBuy, alerts, handleCloseAlert] =
    useCart();

  const [filt, setFilter] = useState("");
  const [cart, setCart] = useState(data);
  // const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.loggedIn)
const {cart:localItem} = useSelector(state=>state.cartItem)
  const items = isLoggedIn ? cart : localItem
  useEffect(() => {
    setCart(data);

    if (filt) {
      setCart(
        data?.filter((filter) =>
          filter.title.toLowerCase().includes(filt.toLowerCase())
        )
      );
    }
  }, [data, filt]);

  let sum = 0;

// iterate over each item in the array
for (let i = 0; i < items.length; i++ ) {
  sum += items[i]?.totalPrice;
}

console.log("sum",sum)
  return (
    <div>
      <Alerts alert={alerts} handleCloseAlert={handleCloseAlert} />
      <CartTable cart={items} handleDelete={handleDelete} />

     <section className="bg-white p-3 m-10">
      <h2 className="text-left">Cart ({ isLoggedIn ? cart?.length : localItem?.length})</h2>
      { items?.map(item=>(
        <CartCard key={item.itemId} item={item}/>
      )) }
     </section>
    </div>
  );
}
