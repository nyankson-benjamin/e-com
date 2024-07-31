import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import useScreenWidth from "../Hooks/useScreenWidth";
import { useNavigate } from "react-router-dom";

import Desktop from "./Devices/Desktop";
import Mobile from "./Devices/Mobile";
import Searchitem from "../components/Searchitem";
export default function AppsBar({
  ItemCategory,
  search,
  handleChange,
  handleLogOut,
}) {
  const [screenWidth] = useScreenWidth();
const categories = JSON.parse(localStorage.getItem("categories"))
  const navigate = useNavigate();
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
                handleLogOut={handleLogOut}
                ItemCategory={ItemCategory}
                categories={categories}
              />
            </>
          ) : (
            <Mobile handleLogOut={handleLogOut} categories={categories} />
          )}
        </Toolbar>
      </AppBar>
    </Stack>
  );
}
