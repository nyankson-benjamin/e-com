import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
// import Add from "@mui/icons-material/Add";
// import Remove from "@mui/icons-material/Remove";
import ButtonComponent from "../Buttons/ButtonComponent";
export default function CartCard({ item }) {
    console.log(item)
  return (
    <div className="w-full border-t-[1px] mt-5 pt-2">
      <div className="flex justify-between">
      <div className="flex">
        <figure>
          <img src={item.image} alt={item.item} className="w-28" />
        </figure>
        <h2>{item.item}</h2>
      </div>

      <div>
       <h2>GHC {item.unitPrice.toFixed(2)}</h2>
      </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-100 p-2 rounded-md">
            <DeleteIcon/>
            <p>Delete</p>
        </div>
<div className="">
    {/* <ButtonComponent text=""><Remove/></ButtonComponent>
    {item.quantity}
    <ButtonComponent text=""><Add/></ButtonComponent> */}
</div>
      </div>
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
  totalItems: PropTypes.number,
};
