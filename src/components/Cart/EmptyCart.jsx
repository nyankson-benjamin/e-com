import ButtonComponent from "../Buttons/ButtonComponent"
import { useNavigate } from "react-router-dom"
export default function EmptyCart() {

    const navigate = useNavigate()
    const handleSubmit = ()=>{
        navigate("/")
    }
  return (
    <div className="bg-white w-10/12 rounded-lg flex items-center justify-center gap-10 flex-col p-5">
        <img src="src\assets\not_found.jpg" alt="" className="rounded-xl w-44 "/>
        <h2 className="font-bold">Your cart is empty!
        </h2>
        <p>Browse our categories and discover our best deals!

</p>
        <ButtonComponent text="Start Shopping" handleSubmit={handleSubmit} />
    </div>
  )
}
