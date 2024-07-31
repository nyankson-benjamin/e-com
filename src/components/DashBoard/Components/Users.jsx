import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { dashBoardItems } from "../../../Constants/dashboardItems";
import useScreenWidth from "../../../Hooks/useScreenWidth";
import UserList from "../Users/UserList";

import { API } from "../../../Services/api";
import UserTable from "../Users/UserTable";
export default function Users() {
  const [screeWidth] = useScreenWidth();
  const [users, setUsers] = useState();

  return (
    <Box sx={{ mt: "35px" }}>
      {/* <UserTable users={users} /> */}
      <UserList />
    </Box>
  );
}
