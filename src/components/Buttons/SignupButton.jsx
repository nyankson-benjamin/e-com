import React from "react";
import { Button } from "@mui/material";
export default function SignupButton({ handleSubmit, disable }) {
  return (
    <Button
      onClick={handleSubmit}
      variant="contained"
      disabled={disable}
      sx={{
        bgcolor: "#ffc801",
        color: "black",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: "20px",
        borderRadius: "20px",
        mt: 2,
        "&:hover": {
          bgcolor: "#ffc801",
        },
      }}
      disableElevation
    >
      signup
    </Button>
  );
}
