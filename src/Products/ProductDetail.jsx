import { useState } from "react";
import { Box, Button, Typography, Stack, Rating, Grid } from "@mui/material";
import useScreenWidth from "../Hooks/useScreenWidth";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PropTypes from "prop-types";
import ModalComponent from "../components/modals/ModalComponent";
import AddToCartModal from "./AddToCartModal";
import { useSelector } from "react-redux";

function ProductDetail({ product }) {
  const [screenWidth] = useScreenWidth();
  const [image, setImage] = useState(product.images.length ? product.images[0] : product.thumbnail);
  const [openModal, setOpenModal] = useState(false);
  const cart = useSelector((state) => state.cartItem.cart);

  const productExists = cart?.find(item=>item?.itemId === product?.id)
  if(productExists){
    product.quantity = productExists?.quantity
  }
 
 
  return (
    <Box sx={{ margin: "50px", mt: "20px" }}>
      <Grid
        container spacing={2} columns={12}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} className={screenWidth < 540 && "flex"}>
        {screenWidth < 540 && <Box
            sx={{ bgcolor: "#ffc801" }}
            className="flex items-center justify-center gap-3 flex-col"
          >
            {product.images?.map((img) => (
              <img
                src={img}
                key={img}
                style={{ width: "50px", height: "50px", margin: "5px" }}
                alt=""
                onClick={() => setImage(img)}
                className={
                  image === img
                    ? "cursor-pointer border bg-white rounded-lg"
                    : "cursor-pointer hover:border rounded-lg"
                }
              />
            ))}
          </Box>}
        <Box
          sx={{
            border: "2px solid #ffc801",
            borderRadius: screenWidth <540 ? "" : "5px 5px 0px 0px",
          }}
          className="bg-white"
        >
          <div className="flex justify-center">
            <img
              src={image}
              alt=""
              style={{ width: "400px", height: "300px" }}
            />
          </div>

          {screenWidth >= 540 && <Box
            sx={{ bgcolor: "#ffc801", mt: 1.5 }}
            className="flex items-center justify-center gap-3"
          >
            {product.images?.map((img) => (
              <img
                src={img}
                key={img}
                style={{ width: "50px", height: "50px", margin: "5px" }}
                alt=""
                onClick={() => setImage(img)}
                className={
                  image === img
                    ? "cursor-pointer border bg-white rounded-lg"
                    : "cursor-pointer hover:border rounded-lg"
                }
              />
            ))}
          </Box>}
        </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
        <Box
          sx={{
            textAlign: "left",
          }}
          className="bg-white rounded-lg"
        >
          <Box
            sx={{
              background: "#ffc801",
              color: "white",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" title={product.title}>
              {product.title?.length > 15
                ? product.title.substring(0, 15) + "..."
                : product.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#003F62", fontWeight: "bold" }}
            >
              - {product.discountPercentage} %
            </Typography>
          </Box>

          <div className="p-3">
            <Typography variant="h5">{product.description}</Typography>
            <Typography variant="h5">
              <s>GHC{product.price}</s>
            </Typography>
            <Typography variant="h5">
              {" "}
              GHC
              {(
                product.price -
                (product.discountPercentage / 100) * product.price
              ).toFixed(2)}
            </Typography>
            <Stack sx={{ justifyContent: "center", alignItems: "left" }}>
              <Rating
                name="half-rating"
                defaultValue={product.rating}
                precision={0.5}
              />
            </Stack>
          </div>
          <Button
            variant="contained"
            onClick={() => setOpenModal(true)}
            startIcon={<AddShoppingCartIcon />}
            disableElevation
            fullWidth
            sx={{
              background: "#ffc801",
              fontWeight: "bold",
              height: "50px",
              mt: 2.9,
              "&:hover": { background: "#ffc801" },
            }}
          >
            ADD TO CART
          </Button>
        </Box>
        </Grid>
      </Grid>
      <ModalComponent
        open={openModal}
        title={product.title}
        handleClose={() => setOpenModal(false)}
      >
        <AddToCartModal product={product}/>
      </ModalComponent>
    </Box>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    discountPercentage: PropTypes.number,
    description: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    id:PropTypes.number,
    quantity:PropTypes.number
  }).isRequired,
};
export default ProductDetail;
