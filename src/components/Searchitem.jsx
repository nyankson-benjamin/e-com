import React from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { Search, Send } from "@mui/icons-material";
export default function Searchitem({ search, handleChange }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TextField
        onChange={handleChange}
        value={search}
        placeholder="
Search products, brands and categories
"
        sx={{ minWidth: 150, mr: 1,  }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search sx={{ color: "white" }} />
            </InputAdornment>
          ),

          inputProps: {
            style: {
              fontSize: "20px",
              height: "20px",
              color: "white",
            },
          },
        }}
      />
      {/* <Button variant="contained" onClick={() => console.log(search)}>
        Search
      </Button> */}
    </Box>
  );
}
