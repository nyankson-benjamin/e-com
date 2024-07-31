import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { dashBoardMenu } from "../../Constants/dashboardMenu";
import Dashboard from "./Components/Dashboard";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useScreenWidth from "../../Hooks/useScreenWidth";
import { IconButton } from "@mui/material";
export default function Menu() {
  const navigate = useNavigate();
  const [component, setComponent] = useState(<Dashboard />);
  const [screenWidth] = useScreenWidth();
  const menuStyle = {
    textAlign: "left",
    fontSize: "16px",
    color: "white",
    textTransform: "Capitalize",
    "&:hover": {
      bgcolor: "#ffc801",
      //   letterSpacing: 3,
      ml: 1,
    },
    "&:focus": {
      bgcolor: "red",
      ml: 1,
      width: "100%",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          width: "15%",
          bgcolor: "#364153",
          m: 0,
          // overflow: "scroll",
        }}
      >
        {screenWidth > 600 ? (
          <Button
            startIcon={<Home />}
            sx={{
              mt: 3,
              textAlign: "left",
              fontSize: "16px",
              color: "white",
              textTransform: "Capitalize",
              "&:hover": {
                bgcolor: "#ffc801",
                //   letterSpacing: 3,
                ml: 1,
              },
            }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        ) : (
          <IconButton sx={{ color: "white" }} onClick={() => navigate("/")}>
            <Home />
          </IconButton>
        )}

        {dashBoardMenu &&
          dashBoardMenu.map((item, index) => (
            <Box key={index}>
              {screenWidth > 600 ? (
                <Box sx={{ p: 3 }}>
                  <Button
                    variant="h5"
                    sx={menuStyle}
                    startIcon={item.icon}
                    onClick={() => {
                      setComponent(item.component);
                    }}
                  >
                    {item.title}
                  </Button>
                </Box>
              ) : (
                <Box>
                  <IconButton
                    variant="h5"
                    sx={{
                      mt: 3,
                      textAlign: "left",
                      fontSize: "16px",
                      color: "white",
                      textTransform: "Capitalize",
                      "&:hover": {
                        bgcolor: "#ffc801",
                        //   letterSpacing: 3,
                        // ml: 1,
                      },
                      "&:focus": {
                        bgcolor: "red",
                        // ml: 1,
                        // width: "100%",
                      },
                    }}
                    // startIcon={item.icon}
                    onClick={() => {
                      setComponent(item.component);
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </Box>
              )}
            </Box>
          ))}
      </Box>

      <Box
        sx={{
          width: "83%",
          height: "100vh",
          //   bgcolor: "#364153"
        }}
      >
        {component}
      </Box>
    </Box>
  );
}
