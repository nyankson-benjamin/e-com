import React from "react";
import Register from "../components/User/Register";
import AppsBar from "../TopBar/AppBar";
import useScreenWidth from "../Hooks/useScreenWidth";
import signupImg from "../assets/signup.jpg";
import { Box } from "@mui/material";
export default function Signup() {
  const [screenWidth] = useScreenWidth();

  return (
    <div className="bg-white pb-5">
      <AppsBar />
      {screenWidth > 600 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            m: "auto",
            width: "90%",
          }}
        >
          <Box sx={{ width: "40%" }}>
            <img src={signupImg} alt="" style={{ width: "100%" }} />
          </Box>
          <Box sx={{ width: "50%" }}>
            <Register />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            m: "auto",
            width: "90%",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Register />
          </Box>
        </Box>
      )}
    </div>
  );
}
