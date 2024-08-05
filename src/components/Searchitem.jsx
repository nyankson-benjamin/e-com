import { TextField, InputAdornment, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
export default function Searchitem({ search, handleChange }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <TextField
        onChange={handleChange}
        onKeyUp={handleChange}
        value={search}
        placeholder="
Search products
"
        sx={{ minWidth: 150, mr: 1 }}
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
