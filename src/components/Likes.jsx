import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    ml: 20,
  },
}));

export default function Likes({ value }) {
  const navigate = useNavigate();
  return (
    <IconButton
      aria-label="cart"
      onClick={() => navigate("/cart")}
      sx={{ marginLeft: "20px", color: "white" }}
    >
      <StyledBadge badgeContent={1} color="secondary">
        <FavoriteIcon />
      </StyledBadge>
    </IconButton>
  );
}
