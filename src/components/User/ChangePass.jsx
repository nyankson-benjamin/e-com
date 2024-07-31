import { Box, Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppsBar from "../../TopBar/AppBar";
import useUsers from "../../Hooks/useUsers";
import useChangePass from "../../Hooks/useChangePass";
import Alerts from "../Alert/Alerts";
export default function ChangePass() {
  const [users] = useUsers();
  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  const id = localStorage.getItem("id");
  const user = users?.find((user) => user.id === Number(id));
  const navigate = useNavigate();
  const [handleChange, formData, error, handleSubmit, alert, handleCloseAlert] =
    useChangePass();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);
  return (
    <Box>
      <AppsBar />
      <Box mt={10} sx={{ width: "90%", m: "auto", textAlign: "left" }}>
        <Alerts alert={alert} handleCloseAlert={handleChange} />
        <form onSubmit={handleSubmit}>
          <TextField
            placeholder="Enter old password"
            type="password"
            sx={{ mt: 5 }}
            fullWidth
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
          />
          {error.oldPassword && (
            <span style={{ color: "red", textAlign: "left" }}>
              {error.oldPassword}
            </span>
          )}

          <TextField
            placeholder="Enter New password"
            type="password"
            sx={{ mt: 5 }}
            fullWidth
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {error.password && (
            <span style={{ color: "red", textAlign: "left" }}>
              {error.password}
            </span>
          )}
          <TextField
            placeholder="Re-enter New password"
            type="password"
            sx={{ mt: 5 }}
            fullWidth
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {error.confirmPassword && (
            <span style={{ color: "red", textAlign: "left" }}>
              {error.confirmPassword}
            </span>
          )}
          <Button fullWidth sx={{ mt: 5 }} type="submit" variant="contained">
            Change password
          </Button>
        </form>
      </Box>
    </Box>
  );
}
