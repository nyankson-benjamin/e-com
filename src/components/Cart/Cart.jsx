import useCart from "../../Hooks/useCart";
import Alerts from "../Alert/Alerts";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";
import CartTotal from "./CartTotal";
import { Grid } from "@mui/material";
import EmptyCart from "./EmptyCart";
import ButtonComponent from "../Buttons/ButtonComponent";
import AddIcon from '@mui/icons-material/Add';
import useScreenWidth from "../../Hooks/useScreenWidth";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [ , loading, handleDelete, , alerts, handleCloseAlert] =
    useCart();

  const { cart: localItem } = useSelector((state) => state.cartItem);
 const [screenWidth]= useScreenWidth()
 const navigate = useNavigate();
window.document.title="Cart | E-Shop"
  let sum = 0;
  
  for (const element of localItem) {
    const { discountPercentage = 0, unitPrice = 0, quantity = 1 } = element;
  
    // Calculate the discount for the current item
    const discountAmount = (discountPercentage / 100) * unitPrice;
    
    // Calculate the total price after discount
    const priceAfterDiscount = unitPrice - discountAmount;
    
    // Add the discounted price multiplied by quantity to the sum
    sum += priceAfterDiscount * quantity;
  }
  
  // Now, `sum` contains the total amount after discounts
  
  return (
    <div className="my-7">
      <Alerts alert={alerts} handleCloseAlert={handleCloseAlert} />
{loading ? <div>Loading...</div> :<>
  {<Grid container spacing={2} justifyContent={"center"}>
       {localItem.length ? <Grid item xs={10} lg={7} md={6}>
          <section className="bg-white p-3 shadow-md">
            <div className="flex justify-between items-center">
            <h2 className="text-left font-bold">
              Cart ({localItem?.length})
            </h2>
            <ButtonComponent handleSubmit={()=>navigate("/")}>{screenWidth > 460 ? "Add more" : <AddIcon/>}</ButtonComponent>
            </div>

            {localItem?.map((item) => (
              <CartCard
                key={item.itemId}
                itemId={item.itemId}
                unitPrice={item.unitPrice}
                handleDeleteItem={handleDelete}
                deleteMsg={alerts.message}
                quantity={item.quantity}
                discountPercentage={item.discountPercentage}
                item={item.item}
                image={item.image}
                _id={item._id}
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
</>}
      
    </div>
  );
}
