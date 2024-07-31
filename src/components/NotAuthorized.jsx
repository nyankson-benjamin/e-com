import Not from "../assets/not_authorized.jpg"
import { Link } from "react-router-dom";

function NotAuthorized() {
  return (
    <div  className="flex justify-center mt-32 flex-col items-center gap-5">
     <img src={Not} alt="" className="w-1/2 rounded-lg shadow-lg"/>
     <Link to={'/'}>Back to homepage</Link>
    </div>
  );
}

export default NotAuthorized;
