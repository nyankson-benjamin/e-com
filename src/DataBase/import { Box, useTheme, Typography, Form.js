import { Box, useTheme, Typography, FormControl } from "@mui/material";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
// import {
//   AdminPanelSettingsOutlined,
//   LockOpenOutlined,
//   SecurityOutlined,
// } from "@mui/icons-material";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [id, setId] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:8000/Data");
        setData(response.data);
      } catch (error) {}
    };
    fetch();
  }, []);

  function DropCell({ row }) {
    const [selectedRole, setSelectedRole] = useState(row.role);
    const handleChange = (event) => {
      setSelectedRole(event.target.value);

      try {
        const role = event.target.value;
        const data = { role: role };
        axios.patch("http://localhost:8000/Data/" + row.id, { ...data });
      } catch (error) {}
    };

    return (
      <Box m="0 auto" p="5px" borderRadius="4px">
        <FormControl variant="standard" sx={{ m: 1 }}>
          <Select value={selectedRole} onChange={handleChange}>
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }

  function handleDelete(id) {
    axios.delete("http://localhost:8000/Data/" + id);
    const index = data.filter((item) => item.id === id);
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }

  function DeleteCell(props) {
    return <ClearIcon onClick={() => handleDelete(props.id)} />;
  }

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      // renderCell: RoleCell,
    },
    {
      field: "",
      headerName: "",
      flex: 1,
      renderCell: DropCell,
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: DeleteCell,
    },
    {
      field: "log",
      headerName: "Last Logged In",
      type: "number",
      align: "left",
      headerAlign: "left",
    },
  ];

  return (
    <Box m="20px">
      <Header title="Users" subTitle="View and edit user details" />
      <Box m="20px" height="70vh">
        <DataGrid rows={data} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
