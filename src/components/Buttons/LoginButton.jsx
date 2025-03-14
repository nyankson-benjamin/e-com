import { Button } from "@mui/material";

export default function LoginButton({ disable, handleSubmit, isLoading }) {
  return (
    <div>
      <Button
        variant="contained"
        fullWidth
        disabled={disable}
        onClick={handleSubmit}
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
        {isLoading ? "Loading..." : "Login"}
      </Button>
      
    </div>
  );
}
