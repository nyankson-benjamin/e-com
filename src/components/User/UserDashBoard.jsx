import { Avatar, Box } from "@mui/material";
import { useEffect,  } from "react";
import AppsBar from "../../TopBar/AppBar";
import { Link, useNavigate } from "react-router-dom";
import NotAuthorized from "../NotAuthorized";
function UserDashBoard() {
  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  const user = JSON.parse(localStorage.getItem("userDetails"))
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);
  return (
    <Box>
      <AppsBar />
     
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
