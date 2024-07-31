import React, { useEffect, useState } from "react";
import { API } from "../Services/api";
export default function useUsers() {
  const [users, setUsers] = useState();
  const [role, setRole] = useState("");
  const [search, setSearch] = useState("");
  const [filterItem, setFilterItem] = useState([]);
  const [alerts, setAlerts] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const handleRole = async (event, id) => {
    setRole("");
    const roles = event.target.value;
    const data = { role: roles };

    try {
      await API.patch("/Users/" + id, { ...data });
      setAlerts({
        open: true,
        message: "User role has been changed successfully",
        severity: "success",
      });
    } catch (error) {}
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await API.get("/Users");
        setUsers(response?.data);
      } catch (error) {}
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete("/Users/" + id);
      const newUsers = users.filter((user) => user.id !== id);
      const user = users.find((user) => user.id === id);
      setUsers(newUsers);
      setAlerts({
        open: true,
        message: `You have deleted ${user.fname} ${user.lname}`,
        severity: "info",
      });
    } catch (error) {}
  };
  const handleCloseAlert = () => {
    setAlerts({ open: false });
  };

  useEffect(() => {
    const handleSearch = () => {
      setFilterItem(
        users?.filter(
          (item) =>
            item.fname.toLowerCase().includes(search.toLowerCase()) ||
            item.lname.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase())
        )
      );
    };
    handleSearch();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return [
    users,
    role,
    handleRole,
    handleDelete,
    alerts,
    handleCloseAlert,
    filterItem,
    search,
    handleSearch,
  ];
}
