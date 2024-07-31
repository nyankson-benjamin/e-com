import React, { useState, useEffect } from "react";
import { Button, TextField, Box, IconButton, ButtonGroup } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Modals({
  open,
  handleClose,
  ItemValue,
  ItemPrice,
  Update,
  id,
  item,
}) {
  const [value, setValue] = useState(ItemValue);
  const navigate = useNavigate();
  useEffect(() => {
    if (value < 1) {
      setValue(1);
    }

    // }
  }, [value]);

  const price = ItemPrice * value;
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Update Item
          </Typography>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            {item} is already in your cart. You can update it here
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>$ {ItemPrice * value}</p>

            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <IconButton onClick={() => setValue(value - 1)}>
                <RemoveIcon />
              </IconButton>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: "center",
                      minWidth: "40px",
                      fontSize: "30px",
                      height: "20px",
                    },
                  },
                }}
                value={value}
                type="number"
                onChange={(e) => setValue(e.target.value)}
              />
              <IconButton onClick={() => setValue(value + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <br />
            <Box>
              <ButtonGroup fullWidth sx={{mt:2}}>
                <Button
                  startIcon={<AddShoppingCartIcon />}
                  onClick={() => Update(price, value, id)}
                >
                  update
                </Button>
                <Button onClick={() => navigate("/cart")}>my cart</Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
