import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  TableCell,
  Button,
  ButtonGroup,
  IconButton,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import { Search } from "@mui/icons-material";
import useScreenWidth from "../../../Hooks/useScreenWidth";
export default function UserTable({
  users,
  handleDelete,
  role,
  handleRole,
  search,
  handleSearch,
}) {
  const [filt, setFilter] = useState("");
  const [screenWidth] = useScreenWidth();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <div style={{ margin: "10px " }}>
      <br />
      {/* {screenWidth > 600 ? ( */}
      <TableContainer
        component={Paper}
        // sx={{ textAlign: "center", margin: "10px" }}
      >
        <br />
        <TextField
          value={search}
          onChange={handleSearch}
          sx={{ width: "70%" }}
        />
        <Table>
          <TableHead>
            <TableRow
              sx={{
                fontSize: "3px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell></TableCell>
              <TableCell sx={{ textAlign: "left" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          {users?.length >= 1 ? (
            <TableBody>
              {users?.map((users) => (
                <TableRow key={users.id}>
                  <TableCell>{users.id}</TableCell>
                  <TableCell>{`${users.fname} ${users.lname}`}</TableCell>
                  {users.isVerified == true ? (
                    <TableCell sx={{ color: "limegreen" }}>
                      <b>Vefified</b>
                    </TableCell>
                  ) : (
                    <TableCell sx={{ color: "red" }}>
                      <b>not Vefified</b>
                    </TableCell>
                  )}
                  <TableCell>{users.email}</TableCell>
                  <TableCell>{users.role}</TableCell>

                  <TableCell>
                    <Select
                      value={role}
                      onChange={(event) => handleRole(event, users.id)}
                    >
                      <MenuItem value="user">user</MenuItem>
                      <MenuItem value="admin">admin</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleDelete(users.id)}
                      sx={{ color: "red" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell colSpan={5}>No users found</TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {/* ) : null} */}
    </div>
  );
}
