import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import { useState, } from "react";
import useScreenWidth from "../Hooks/useScreenWidth";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import useCart from "../Hooks/useCart";
import Modals from "../components/Cart/Modals";
import Alert from "../components/Alert/Alerts";
import { useSelector, useDispatch } from "react-redux";
import useAddToCart from "../Hooks/useAddToCart";

export default function AddToCart({ product }) {
  const {
    handleAddToCart,
    handleClose,
    Update,
    handleCloseAlert,
    alert,
    open,
    disable,
    value,
    setValue,
  } = useAddToCart(product);
  const [image, setImage] = useState(product.thumbnail);
  const [screenWidth] = useScreenWidth();

  const navigate = useNavigate();

  const [data] = useCart();

  const cartItem = {
    item: product.title,
    img_link: image,
    quantity: value,
    unitPrice:
      product.price - (product.discountPercentage / 100) * product.price,
    totalPrice:
      (
        product.price -
        (product.discountPercentage / 100) * product.price
      ).toFixed(2) * value,
  };





  const state = useSelector((state) => state.cartItem);
  const products = data?.find((product) => product.item === cartItem.item);

  return (
    <Box>
      {products && (
        <Modals
          open={open}
          handleClose={handleClose}
          ItemValue={products.quantity}
          ItemPrice={products.totalPrice}
          Update={Update}
          id={product._id}
          item={products.item}
        />
      )}

      <Alert
        alert={state.alert.open ? state.alert : alert}
        handleCloseAlert={handleCloseAlert}
      />

      <h2 className="font-bold py-5 bg-white">ADD TO CART</h2>
      {screenWidth < 600 ? (
        <Box className="bg-white">
          {" "}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image}
              style={{
                width: "300px",
                height: "300px",
                border: "2px solid #ffc801",
                marginTop: "10px",
                marginBottom: "10px",
                padding: "5px",
                borderRadius: "5px",
              }}
            />
            <Box sx={{ display: "flex" }}>
              {product.images?.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  onClick={() => setImage(img)}
                  style={{ width: "50px", margin: "10px" }}
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
              margin: "auto",
            }}
          >
            <Typography>{product.title}</Typography>
            <Typography>
              GHC
              {(
                product.price -
                (product.discountPercentage / 100) * product.price
              ).toFixed(2) * value}
            </Typography>
            <br />
            <Box>
              <IconButton onClick={() => setValue(value - 1)}>
                <RemoveIcon />
              </IconButton>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: "center",
                      width: "60px",
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
              sx={{ bgcolor: "#ffc801", "&:hover": { bgcolor: "#ffc801" } }}
            >
              Add
            </Button>
            <br />
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate("/cart")}
              startIcon={<AddShoppingCartIcon />}
              sx={{
                mt: 2,
                bgcolor: "#ffc801",
                "&:hover": { bgcolor: "#ffc801" },
              }}
            >
              My cart
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="bg-white rounded-bl-lg rounded-br-lg mt-5"
          >
            <img
              src={image}
              style={{
                width: "300px",
                height: "300px",
                border: "2px solid #ffc801",
                marginBottom: "10px",
                padding: "5px",
                borderRadius: "5px",
              }}
            />
            <Box sx={{ display: "flex" }}>
              {product.images?.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  onClick={() => setImage(img)}
                  style={{ width: "50px", margin: "10px", height: "50px" }}
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
              marginLeft: "20px",
            }}
            className="bg-white p-5 mt-5"
          >
            <Typography>{product.title}</Typography>
            <Typography>
              GHC
              {(
                product.price -
                (product.discountPercentage / 100) * product.price
              ).toFixed(2) * value}
            </Typography>
            <br />
            <Box>
              <IconButton onClick={() => setValue(value - 1)}>
                <RemoveIcon />
              </IconButton>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: "center",
                      width: "40px",
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
                mt: 2,
                bgcolor: "#ffc801",
                "&:hover": { bgcolor: "#ffc801" },
              }}
            >
              Add
            </Button>
            <br />
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate("/cart")}
              startIcon={<AddShoppingCartIcon />}
              disableElevation
              sx={{
                mt: 2,
                bgcolor: "#ffc801",
                "&:hover": { bgcolor: "#ffc801" },
              }}
            >
              My cart
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
