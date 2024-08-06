import { Avatar, Box } from "@mui/material";
import { useEffect,  } from "react";
import { useNavigate } from "react-router-dom";
import NotAuthorized from "../NotAuthorized";
import { useSelector } from "react-redux";

function UserDashBoard() {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn)
  const {user} = useSelector(state=>state.userDetails)
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  return (
    <Box>
     
      <Box>
        {isLoggedIn && user && user.isAdmin
 ? (
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar>{user.fname[0]}</Avatar>
            <p>{user.fname}</p>
            <p>{user.lname}</p>
            <p>{user.contact}</p>
            <p>{user.fname}</p>
            <p>{user.country}</p>
          </Box>
        ) : (

          <NotAuthorized/>
)}
      </Box>
    </Box>
  );
}

export default UserDashBoard;
