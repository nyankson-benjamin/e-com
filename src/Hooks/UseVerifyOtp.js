import { useState, useRef, useEffect } from "react";
import useUsers from "./useUsers";
import { useNavigate } from "react-router-dom";
import { API } from "../Services/api";
export default function useVerifyOtp() {
  const [otp, setOTP] = useState("");
  const otpInputRef = useRef();
  const [disable, setDisable] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [users] = useUsers();

  const [alerts, setAlerts] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const navigate = useNavigate();
  function handleOTPChange(value) {
    if (isNaN(value)) {
      setDisable(true);
      setHasErrored(true);
    } else if (value.length >= 4) {
      setDisable(false);
      setHasErrored(false);
    } else if (value.length === 0) {
      setHasErrored(false);
    } else {
      setDisable(true);
    }

    setOTP(value);
  }

  useEffect(() => {
    if (localStorage.getItem("userDetails")) {
      navigate("/");
    }
  });

  function handleKeyDown(event) {
    if (event.keyCode === 8) {
      // Backspace key
      event.preventDefault();
     

    }
  }

  function handlePaste(event) {
    event.preventDefault();
    const otpInput = otpInputRef.current.getInputInstance();
    const inputValue = otpInput.value;
    const cursorPosition = otpInput.selectionStart;
    const clipboardData = event.clipboardData.getData("Text");
    const newValue =
      inputValue.slice(0, cursorPosition) +
      clipboardData +
      inputValue.slice(cursorPosition);
    setOTP(newValue);
  }


  const handleSubmit = async (event) => {

    try {
      setIsLoading(true);
      const data = { code: Number(otp), email:localStorage.getItem("email") };
      await API.post("/confirm", { ...data });
      setIsLoading(false);
      setAlerts({
        open: true,
        message: "verification successfull",
        severity: "success",
      });
      setTimeout(() => {
        navigate("/login");
      }, 6000);
    } catch (error) {
      setIsLoading(false)
      setAlerts({
        open: true,
        message: "Invalid verification code.",
        severity: "error",
      });
    }
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    // setOpenAlert(false);
    setAlerts({
      open: false,
      message: "",
      severity: "",
    });
  };

  return [
    handleOTPChange,
    handleKeyDown,
    handlePaste,
    handleSubmit,
    disable,
    otp,
    otpInputRef,
    hasErrored,
    alerts,
    handleCloseAlert,
    isLoading,
  ];
}
