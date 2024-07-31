import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import {} from "../../styles/BackButtonStyle";
import {
  BackButtonStyle,
  BackArrowStyle,
  BackButtonTextStyle,
  BackButtonContainerStyle,
} from "../../styles/Styles";
function BackButton() {
  return (
    <div style={BackButtonContainerStyle}>
      <div>
        <Link to="/login" style={BackButtonStyle}>
          <ArrowBackIcon sx={BackArrowStyle} />
          <Typography variant="p" sx={BackButtonTextStyle}>
            {" "}
            Back to login
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default BackButton;
