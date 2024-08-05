import { useEffect, useState } from "react";
import {
  TextField,
  FormControl,
  FormLabel,
  InputAdornment,
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import Alerts from "../Alert/Alerts";
import BackButton from "../Buttons/BackButton";
import AuthButton from "../Buttons/AuthButton";
import { API } from "../../Services/api";
export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [disable, setDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [alerts, setAlerts] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const navigate = useNavigate();

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPass = (event) => {
    setConfirmPass(event.target.value);
  };

  useEffect(() => {
    if (password === "" || confirmPass === "" || password.length < 6) {
      setDisable(true);
    } else if (password !== confirmPass) {
      setError("Password does not match");
    } else {
      setError("");
      setDisable(false);
    }
  }, [password, confirmPass]);

  useEffect(() => {
    if (localStorage.getItem("userDetails")) {
      navigate("/");
    }
  });
  const handleForgot = async () => {


    try {
      setIsLoading(true);
      await API.post("/resetPassword", { password, confirmPass });
      setAlerts({
        open: true,
        message: "Password reset successfully",
        severity: "success",
      });
      setIsLoading(false);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      if (error?.message === "Network Error") {
        setAlerts({
          open: true,
          message: "There was a problem reseting your password",
          severity: "error",
        });
        setIsLoading(false);
      } else {
        setAlerts({
          open: true,
          message: error?.response?.data,
          severity: "error",
        });
        setIsLoading(false);
      }
    }
  };

  const handleCloseAlert = () => {
    setAlerts({
      open: false,
    });
  };
  return (
    <FormControl
      sx={{
        width: "100%",
        // mt: "100px",
      }}
    >
      <Alerts alert={alerts} handleCloseAlert={handleCloseAlert} />
      <h3>Reset Password?</h3>
      <p></p>
      <p>{error}</p>
      <FormLabel
        sx={{ textAlign: "left", mt: 2, mb: 1, fontWeight: "bold" }}
        htmlFor="email"
      >
        {/* Email */}
      </FormLabel>

      <TextField
        fullWidth
        id="email"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={handlePassword}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOpenIcon />
            </InputAdornment>
          ),

          inputProps: {},
        }}
      />
      <br />

      <TextField
        fullWidth
        id="email"
        type="password"
        placeholder="Confirm New Password"
        value={confirmPass}
        onChange={handleConfirmPass}
        sx={{ mt: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOpenIcon />
            </InputAdornment>
          ),

          inputProps: {},
        }}
      />

      <br />
      <AuthButton handleSubmit={handleForgot} disable={disable || isLoading} isLoading={isLoading} />
      <BackButton />
    </FormControl>
  );
}
