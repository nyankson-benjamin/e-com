import React from "react";
import {
  TextField,
  FormControl,
  Box,
  FormLabel,
  InputAdornment,
  Button,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link } from "react-router-dom";
import LoginButton from "../Buttons/LoginButton";
import useLogin from "../../Hooks/useLogin";
import Alerts from "../Alert/Alerts";
import AuthButton from "../Buttons/AuthButton";

function SignIn({
  handleCloseAlert,
  email,
  handleEmail,
  password,
  handlePassword,
  alert,
  disable,
  handleSubmit,
  isLoading
}) {
 
  return (
    <Box >
      <Alerts alert={alert} handleCloseAlert={handleCloseAlert} />
      <FormControl sx={{ width: "70%", mt: "100px" }}>
        <h3>Log in to your account</h3>
        <FormLabel
          sx={{ textAlign: "left", mt: 2, mb: 1, fontWeight: "bold" }}
          htmlFor="email"
        >
          Email
        </FormLabel>

        <TextField
          fullWidth
          id="email"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmail}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),

            inputProps: {},
          }}
        />

        <FormLabel
          sx={{ textAlign: "left", mt: 2, mb: 1, fontWeight: "bold" }}
          htmlFor="password"
        >
          Password
        </FormLabel>

        <TextField
          fullWidth
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
          placeholder="Enter Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpenIcon />
              </InputAdornment>
            ),

            inputProps: {},
          }}
        />

        <AuthButton disable={disable || isLoading} handleSubmit={handleSubmit} isLoading={isLoading} text="Login" />

        <p>
          Dont have and account? Signup<Link to="/signup"> here</Link>
        </p>
        <p>
          Forgot password? Reset<Link to="/forgot"> here</Link>
        </p>
      </FormControl>
    </Box>
  );
}

export default SignIn;
