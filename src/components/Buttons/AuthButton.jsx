import { Button } from "@mui/material";
import PropTypes from 'prop-types';
 
export default function AuthButton({ disable, handleSubmit, isLoading, text="Submit" }) {
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
        {isLoading ? "Loading..." : text}
      </Button>
    </div>
  );
}

// PropTypes validation
AuthButton.propTypes = {
  disable: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  text:PropTypes.string
};
