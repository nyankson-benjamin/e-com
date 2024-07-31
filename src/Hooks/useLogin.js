import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../Services/api";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const reg = /^\S+@\S+\.\S+$/;

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    if (!email.match(reg) || password === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [email, reg, password]);
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("userDetails")) {
      navigate("/");
    }
  });

  const handleSubmit = async () => {
    const location = localStorage.getItem("userPrevLocation");

    try {
      setDisable(true);
      const response = await API.post("/user/login", { email, password });
      localStorage.setItem("userDetails", JSON.stringify(response?.data?.data));
      localStorage.setItem("isLoggedIn", true);
      setAlert({
        open: true,
        message: "Login successfull,",
        severity: "success",
      });
      setDisable(false);

      if (location) {
        setTimeout(() => {
          navigate(`${location.slice(21)}`);
          localStorage.removeItem("userPrevLocation");
        }, 4000);
      } else {
        setTimeout(() => {
          navigate("/");
        }, 4000);
      }
    } catch (error) {
      if (error.message === "Network Error") {
        setAlert({
          open: true,
          message: "There was a problem loging in",
          severity: "error",
        });
      } else {
        setAlert({
          open: true,
          message: error.response.data,
          severity: "error",
        });
      }
    }
  };

  const handleLogOut = () => {
    alert("hello");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userDetails");
    navigate("/login");
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    // setOpenAlert(false);
    setAlert({
      open: false,
      message: "",
      severity: "",
    });
  };
  return [
    handleSubmit,
    email,
    password,
    disable,
    handleEmail,
    handlePassword,
    handleLogOut,
    alert,
    handleCloseAlert,
  ];
}
