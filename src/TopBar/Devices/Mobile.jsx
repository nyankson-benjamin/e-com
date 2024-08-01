import {
  IconButton,
  Typography,
  Button,
  Stack,
  Box,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState, } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";

import { page, } from "../../Constants/constants";
import {  useNavigate } from "react-router-dom";


import CartLength from "../../components/Cart/CartLength";
import PersonIcon from "@mui/icons-material/Person";

import LogoutIcon from "@mui/icons-material/Logout";
import Alerts from "../../components/Alert/Alerts";
function Mobile({ categories, logOut }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isLoggedIn = useSelector((state) => state.auth.loggedIn)

  const {user} = useSelector(state=>state.userDetails)


  const handleCloseAlert = (event, reason) => {
    setAlert({
      open: false,
      message: "",
      severity: "",
    });
  };
  return (
    <>
      <Alerts alert={alert} handleCloseAlert={handleCloseAlert} />
      <Stack
        direction="row"
        spacing={3} // sx={{
      >
        <Box sx={{ flexGrow: 0, alignItems: "center", display: "flex" }}>
          {/* <IconButton color="inherit">
            <Search />
          </IconButton> */}

          <CartLength />
          <Tooltip title="Open settings">
            <Button
              onClick={(event) => setCategory(event.currentTarget)}
              sx={{
                p: 0,
                ml: 3,
                textTransform: "Capitalize",
                fontWeight: "bold",
                fontSize: "15px",
              }}
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
            >
              Categories
            </Button>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={category}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(category)}
            onClose={() => setCategory(null)}
          >
            {categories?.map((category) => (
              <MenuItem
                key={category}
                onClick={() => navigate(`/categories/${category}`)}
              >
                <Typography textAlign="center" className="capitalize">{category}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <IconButton color="inherit" onClick={handleOpenNavMenu} sx={{ p: 0 }}>
          <MenuIcon />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {page?.map((page) => (
            <MenuItem key={page.id} onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                onClick={() => navigate(`/${page.route}`)}
              >
                {page.name}
              </Typography>
            </MenuItem>
          ))}
          {isLoggedIn && user ? (
            <Box>
              <MenuItem onClick={handleCloseNavMenu}>
                <button className="flex gap-2 bg-transparent" onClick={() => logOut()}>
                <LogoutIcon/>
              <p>Logout</p>

              </button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>{user.fname}</MenuItem>
            </Box>
          ) : (
            <MenuItem onClick={handleCloseNavMenu}  >
              <button className="flex gap-2 bg-transparent" onClick={() => navigate("/login")}>
              <PersonIcon  /><p>Login</p>

              </button>
            </MenuItem>
          )}
        </Menu>
      </Stack>
    </>
  );
}

export default Mobile;
