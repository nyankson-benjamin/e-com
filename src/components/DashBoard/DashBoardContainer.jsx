import React from "react";
import { Box } from "@mui/material";
import Menu from "./Menu";

export default function DashBoardContainer() {
  return (
    <Box sx={{ width: "100%", height: "100vh", bgcolor: "#1A202C", m: 0 }}>
      <Menu />
    </Box>
  );
}
