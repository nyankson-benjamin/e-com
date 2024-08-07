import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCart from "../../Hooks/useCart";  
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    ml: 20,
  },
}));

export default function CartLength({ user }) {
  const navigate = useNavigate();
  const [data] = useCart();
  const {cart} = useSelector(state=>state.cartItem)
  const isLoggedIn = useSelector((state) => state.auth.loggedIn)

  return (
    <IconButton
      aria-label="cart"
      onClick={() => navigate("/cart")}
      sx={{ marginLeft: "30px" }}
      title={isLoggedIn ? `${data?.length} items` : `${cart?.length} items`}
    >
      <StyledBadge badgeContent={isLoggedIn ? data?.length : cart?.length} color="secondary">
        <ShoppingCartIcon sx={{ color: "white" }} />
      </StyledBadge>
    </IconButton>
  );
}
