import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";
import useUsers from "../../../Hooks/useUsers";
import Alerts from "../../Alert/Alerts";
import { TextField } from "@mui/material";
function UserList() {
  const [
    users,
    role,
    handleRole,
    handleDelete,
    alerts,
    handleCloseAlert,
    filterItem,
    search,
    handleSearch,
  ] = useUsers();
  return (
    <>
      <Alerts alert={alerts} handleCloseAlert={handleCloseAlert} />
      <UserTable
        users={filterItem}
        role={role}
        handleRole={handleRole}
        handleDelete={handleDelete}
        filterItem={filterItem}
        search={search}
        handleSearch={handleSearch}
      />
    </>
  );
}

export default UserList;
