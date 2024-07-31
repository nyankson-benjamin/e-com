import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Box,
  TextField,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

import { page, categories } from "../../Constants/constants";
import { Link, useNavigate } from "react-router-dom";

import { navLinkStyle } from "../../styles/Styles";

import CartLength from "../../components/Cart/CartLength";
import useUsers from "../../Hooks/useUsers";
import Searchitem from "../../components/Searchitem";
import PersonIcon from "@mui/icons-material/Person";
import { Search } from "@mui/icons-material";

import LogoutIcon from "@mui/icons-material/Logout";
import Alerts from "../../components/Alert/Alerts";
function Mobile({ categories }) {
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

  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  // if (localStorage.getItem("userDetails")) {
  //   setUser(JSON.parse(localStorage.getItem("userDetails")));
  // }
  const user = JSON.parse(localStorage.getItem("userDetails"));

  const logOut = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem("userDetails");
    setAlert({
      open: true,
      message: "Logout successfull",
      severity: "success",
    });
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

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
                <LogoutIcon onClick={logOut} />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>{user.fname}</MenuItem>
            </Box>
          ) : (
            <MenuItem onClick={handleCloseNavMenu}>
              <PersonIcon onClick={() => navigate("/login")} />
            </MenuItem>
          )}
        </Menu>
      </Stack>
    </>
  );
}

export default Mobile;
