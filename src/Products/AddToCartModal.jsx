import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import useAddToCart from "../Hooks/useAddToCart";
import PropTypes from "prop-types";
import useScreenWidth from "../Hooks/useScreenWidth";
import Add from "@mui/icons-material/Add";

export default function AddToCartModal({ product }) {
  const { handleAddToCart, disable, value, setValue } = useAddToCart(product);
  const [image, setImage] = useState(product.images.length ? product.images[0] : product?.thumbnail);
const [screenWidth] = useScreenWidth();
  const navigate = useNavigate();

  AddToCartModal.propTypes = {
    product: PropTypes.shape({
      thumbnail: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      discountPercentage: PropTypes.number,
      description: PropTypes.string,
      price: PropTypes.number,
      rating: PropTypes.number,
      id: PropTypes.number,
    }).isRequired,
  };
  return (
    <Box className="mt-3">
      <Box sx={{ display: "flex", gap:"10px", justifyContent: "center", flexDirection: screenWidth >= 540 ? "row" :"column" }}>
        {" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="bg-white rounded-bl-lg rounded-br-lg"
        >
          <img
            src={image}
            style={{
              width: "300px",
              height: "200px",
            //   border: "2px solid ",
              marginBottom: "10px",
              padding: "5px",
              borderRadius: "5px",
            }}
            className="shadow-md"
          />
          <Box sx={{ display: "flex", }}>
            {product.images?.map((img, index) => (
              <img
                src={img}
                key={index}
                onClick={() => setImage(img)}
                style={{ width: "50px", height: "50px" }}
                className="hover:shadow-md rounded-lg"
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "300px",
            // marginLeft: "20px",
          }}
          className="bg-white"
        >
          {screenWidth > 540 && <Typography sx={{mb:3, fontSize:32, fontWeight:"bold"}}>
            GHC
            {((
              product.price -
              (product.discountPercentage / 100) * product.price
            )* value).toFixed(2) }
          </Typography>}
          <Box className="flex">
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
          <Button
            fullWidth
            variant="contained"
            onClick={handleAddToCart}
            disabled={disable}
            disableElevation
            sx={{
              mt: 1,
              bgcolor: "#ffc801",
              "&:hover": { bgcolor: "#ffc801" },
            }}
          >
           {screenWidth < 540 ? <><Add/> <Typography>
            GHC
            {((
              product.price -
              (product.discountPercentage / 100) * product.price
            ) * value).toFixed(2)}
          </Typography></>  : "Add"}
          </Button>
          <br />
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/cart")}
            startIcon={<AddShoppingCartIcon />}
            disableElevation
            sx={{
              bgcolor: "#ffc801",
              "&:hover": { bgcolor: "#ffc801" },
            }}
          >
            My cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
