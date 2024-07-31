import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { bottomBarStyle } from "../styles/Styles";
export default function BottomBar() {
  const [category, setCategory] = useState("categories");
  return (
    <div style={bottomBarStyle}>
      <FormControl
        sx={{
          //   m: 1,
          minWidth: "320px",
          //   pb: 3,
          // ml: 5,
          //   marginLeft: "6%",
        }}
      >
        <Select
          value={category}
          displayEmpty
          sx={{
            height: "71px",
            borderRadius: 2,
            border: "10px inset #DOD5DD",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
            background: "#EDA415",
            textAlign: "left",
            color: "white",
            fontSize: "30px",
          }}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="categories" disabled>
            Browse categories
          </MenuItem>
          <MenuItem value="phones">Phones</MenuItem>
          <MenuItem value="laptops">Laptops</MenuItem>
        </Select>
      </FormControl>

      <div
        style={{
          dispaly: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          //   width:'400px'
        }}
      >
        <Link>Home</Link>
        <Link>Catalog</Link>
        <Link>Blog</Link>
        <Link>Pages</Link>
        <Link>About</Link>
      </div>
    </div>
  );
}
