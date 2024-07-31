import React from "react";
import { navBarStyle } from "../styles/Styles";
import {
  Button,
  TextField,
  InputAdornment,
  OutlinedInput,
  ButtonGroup,
  IconButton,
  Box,
} from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CartItem from "../components/CartItem";
import Likes from "../components/Likes";
import { Link } from "@mui/material";
import { Search, Send } from "@mui/icons-material";

function Navbar() {
  return (
    <div style={navBarStyle}>
      <div
        style={{
          height: "100px",
          //   background: "white",
          width: "100%",
          top: "100%",
          color: "#282c34",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link to={"/"} style={{ color: "white", padding: "10px" }}>
          Miles
        </Link>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            placeholder="
Search products, brands and categories
"
            sx={{
              minWidth: 400,
              mr: 1,
              border: "1px solid white",
              color: "white",
            }}
            InputProps={{
              style: {
                color: "white",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "white" }} />
                </InputAdornment>
              ),
              //   endAdornment: (
              //     <IconButton onClick={() => alert("searched")}>
              //       <Send />
              //     </IconButton>
              //   ),
            }}
          />
          <Button variant="contained">Search</Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Person2OutlinedIcon sx={{ color: "white" }} />
          <p>login</p>

          <Likes />
          <CartItem />
        </Box>
      </div>
    </div>
  );
}

export default Navbar;
