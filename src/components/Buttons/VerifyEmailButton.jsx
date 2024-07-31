import React from "react";
import { Button } from "@mui/material";
export default function VerifyEmailButton({ handleSubmit, disable }) {
  return (
    <Button
      onClick={handleSubmit}
      variant="contained"
      disabled={disable}
      fullWidth
      sx={{
        bgcolor: "#ffc801",
        color: "black",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: "20px",
        borderRadius: "20px",
        "&:hover": {
          bgcolor: "#ffc801",
        },
      }}
      disableElevation
    >
      Verify Email
    </Button>
  );
}
