import React from "react";
import { topWhiteStyle } from "../styles/Styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";
import { AppBar, Container } from "@mui/material";
import { Box } from "@mui/system";
function TopWhite() {
  return (
    <AppBar
      position="static"
      sx={{ background: "white", height: "100px", color: "#003F62" }}
    >
      <Container sx={topWhiteStyle}>
        <p>Need help? Call us: (+233) 24 121 6747</p>

        <div style={{ display: "flex", justifyContent: "" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <LocationOnIcon sx={{ padding: "10px" }} />
            <Link>Our store</Link>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <LocalShippingIcon sx={{ padding: "10px" }} />
            <Link>Track your order</Link>
          </div>
        </div>
      </Container>
    </AppBar>
  );
}

export default TopWhite;
