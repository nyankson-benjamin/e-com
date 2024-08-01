import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useDispatch, useSelector } from "react-redux";
import useScreenWidth from "../Hooks/useScreenWidth";
import { useNavigate, useLocation } from "react-router-dom";
import { updateLoginState } from "../store/slice/authSlice";
import { setAlert } from "../store/slice/alertSlice";
import { setUser } from "../store/slice/userSlice";
import Alerts from "../components/Alert/Alerts";

import Desktop from "./Devices/Desktop";
import Mobile from "./Devices/Mobile";
import Searchitem from "../components/Searchitem";
import { useEffect } from "react";
export default function AppsBar({
  ItemCategory,
  search,
  handleChange,
  handleLogOut,
}) {
  const [screenWidth] = useScreenWidth();
  const alert = useSelector((state) => state.alert)
  const isLoggedIn = useSelector((state) => state.auth.loggedIn)

  const dispatch = useDispatch()
 const beforeLoginRoutes = ["/cart"]
const route = useLocation()
const logout = ()=>{
dispatch(updateLoginState(false))
dispatch(setUser({}))
dispatch(setAlert(["success", "Logout successfull", true]))
    setTimeout(() => {
      navigate("/login");
    }, 3000);

}

const handleCloseAlert = ()=>{
dispatch(setAlert(["success", "Logout successfull", false]))

}

const categories = JSON.parse(localStorage.getItem("categories"))
  const navigate = useNavigate();

useEffect(()=>{
beforeLoginRoutes?.forEach(item=>{
  if(route.pathname===item && !isLoggedIn){
    navigate("/")
  }
})
},[beforeLoginRoutes, isLoggedIn, navigate, route])
return (
    <Stack>
      <AppBar
        position="static"
        sx={{
          background: "#ffc801",
          width: "100%",
          color: "black",
          textTransform: "capitalize",
        }}
      >
              <Alerts alert={alert} handleCloseAlert={()=>handleCloseAlert()}/>

        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              size="large"
              edge="start"
              aria-label="logo"
              onClick={() => navigate("/")}
            >
              <LocalMallIcon />
            </IconButton>
{
  screenWidth>900 && <div className="flex items-center mr-3">
    <Typography variant="h6" className="whitespace-nowrap" component="div" sx={{ flexGrow: 1 }}>
                E-Shop
              </Typography>

  </div>
}
{
  screenWidth >600 && <Searchitem search={search} handleChange={handleChange}/>

}
          </Box>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* MILES */}
          </Typography>

          {screenWidth > 940 ? (
            <>
              
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {/* MILES */}
              </Typography>

              <Desktop
                search={search}
                handleChange={handleChange}
                logOut={logout}
                ItemCategory={ItemCategory}
                categories={categories}
              />
            </>
          ) : (
            <Mobile logOut={logout} categories={categories} />
          )}
        </Toolbar>
      </AppBar>
    </Stack>
  );
}
