import React, { useState } from "react";
import useUsers from "./useUsers";
import { API } from "../Services/api";
import { useNavigate } from "react-router-dom";
export default function useChangePass() {
  const [users] = useUsers();
  const isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  const id = localStorage.getItem("id");
  const user = users?.find((user) => user.id === Number(id));
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const [formData, setFormData] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validate = () => {
    const { oldPassword, password, confirmPassword } = formData;
    const errors = {};

    if (!oldPassword) {
      errors.oldPassword = "Old password is required";
    } else if (user && oldPassword !== user.password) {
      errors.oldPassword = "Invalid password";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (user && password === user.password) {
      errors.password = "New password must not be the same as the old password";
    } else if (password <= 6) {
      errors.password = "Password must be more 6 characters";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "confirm Password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validate();
    setError(errors);

    if (Object.keys(errors).length === 0) {
      const newPass = formData.password;
      const data = { password: newPass };
      try {
        API.patch(`/Users/${user.id}`, { ...data });
        setAlert({
          open: true,
          message: `Password has been changed successfully`,
          severity: "success",
        });

        setTimeout(() => {
            navigate('/myDashBoard')
        }, 3000);
      } catch (error) {}
    }
  };

  const handleCloseAlert = () => {
    setAlert({
      open: false,
      message: "",
      severity: "",
    });
  };

  return [handleChange, formData, error, handleSubmit, alert, handleCloseAlert];
}
