import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import ButtonComponent from "../Buttons/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { mutateCartQuantity, removeFromCart } from "../../store/slice/cartSlice";
import ModalComponent from "../modals/ModalComponent";
import { useState } from "react";

export default function CartCard({ item, handleDeleteItem, deleteMsg }) {
const dispatch = useDispatch();
const [open, setOpen] = useState(false)
const isLoggedIn = useSelector((state) => state.auth.loggedIn)

const handleMutateQuantity = (type)=>{
dispatch(mutateCartQuantity({id:item.itemId, type}))
}

const handleToggleModal = ()=>{
    setOpen(prev=> !prev)
}

const handleDelete = ()=>{
    if(isLoggedIn){
handleDeleteItem(item._id, item.item)
if(deleteMsg === item.item + " has been deleted successfully"){
 dispatch(removeFromCart(item.itemId))

}
    }else{
        dispatch(removeFromCart(item.itemId))

    }
         handleToggleModal()

}

const handleView = ()=>{
    console.log(item)
}

const getActualPrice = ()=>{
   return (item.unitPrice -
    (item.discountPercentage / 100) * item.unitPrice
  ).toFixed(2)
}


  return (
    <div className="border-t-[1px] mt-5 pt-2 hover:shadow-sm hover:rounded-lg p-5">
      <div className="flex justify-between cursor-pointer" onClick={handleView}>
      <div className="flex gap-3">
        <figure>
          <img src={item.image} alt={item.item} className="w-28" />
        </figure>
        <h2>{item.item}</h2>
      </div>

      <div>
       <h2 className="font-bold">
        { !isNaN(getActualPrice()) ?<s>GHC {item.unitPrice.toFixed(2)}</s> : <span>GHC {item.unitPrice.toFixed(2)}</span>}
       </h2>
       <div className="flex gap-4">
       <h2 className="">{(!isNaN(getActualPrice()) ?  `GHC ${getActualPrice()}` :"")}</h2>
      {!isNaN(getActualPrice()) && <div className="bg-[#ffd231] p-0.5 rounded-lg">{item.discountPercentage}%</div>}
       </div>
      </div>
      
      </div>

      

      <div className="flex justify-between">
        <div className="flex items-center gap-1 cursor-pointer text-[#ffc801] hover:bg-[#ffd231] hover:text-[#fff] p-2 rounded-md" onClick={()=>handleToggleModal()}>
            <DeleteIcon />
            <p className="">Remove</p>
        </div>
<div className="flex items-center gap-3">
    <ButtonComponent text="" className={'w-3'} disabled={item.quantity <=1} handleSubmit={()=>handleMutateQuantity("decrease")}><Remove /></ButtonComponent>
    {item.quantity}
    <ButtonComponent text="" className={'w-3'} handleSubmit={()=>handleMutateQuantity("increase")}><Add/></ButtonComponent>
</div>
      </div>
      <ModalComponent title="Remove from cart" open={open} handleClose={handleToggleModal}>
        <p>Do you really want to remove this item from cart?</p>
        <div className="flex items-center justify-center mt-5">
            <ButtonComponent className="w-full" text="Remove item" handleSubmit={handleDelete}/>
        </div>
      </ModalComponent>
    </div>
  );
}

CartCard.propTypes = {
  item: {
    image: PropTypes.string,
    item: PropTypes.string,
    quantity: PropTypes.number,
    unitPrice: PropTypes.number,
    totalPrice: PropTypes.number,
    purchased: PropTypes.bool,
},
handleDeleteItem:PropTypes.func,
deleteMsg:PropTypes.string
};
