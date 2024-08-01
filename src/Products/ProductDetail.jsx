import { useState } from "react";
import { Box, Button, Typography, Stack, Rating } from "@mui/material";
import useScreenWidth from "../Hooks/useScreenWidth";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PropTypes from 'prop-types';

function ProductDetail({ product }) {
  const [screenWidth] = useScreenWidth();
const [image, setImage ] = useState(product.thumbnail)
  const navigate = useNavigate();
  return (
    <Box sx={{ mb: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: screenWidth > 600 ? "row" : "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: screenWidth > 600 ? "450px" : "350px",
            border: "2px solid #ffc801",
            borderRadius: "5px 5px 0px 0px",
            // height: "300px",
          }}
className="bg-white"
        >
         <div  className="flex justify-center"
         >
          <img
            src={image}
            alt=""
            style={{ width: "400px", height: "300px",  }}
         />
           </div>
          <br />

          <Box sx={{ bgcolor: "#ffc801", mt: 1.5 }} className="flex items-center justify-center gap-3">
            {product.images?.map((img) => (
              <img
                src={img}
                key={img}
                style={{ width: "50px", height: "50px", margin: "5px" }}
                alt=""
                onClick={()=>setImage(img)}
                className={image === img ? "cursor-pointer border bg-white rounded-lg":"cursor-pointer hover:border rounded-lg"}
              />
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            width: screenWidth > 600 ? "450px" : "350px",
            textAlign: "left",
            // margin: "auto",
            ml: screenWidth > 600 ? 2 : null,
            // mt: screenWidth > 600 ? null : 2,
            // height: "300px",
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
              { product.title?.length >15 ? product.title.substring(0, 15) + "..." :product.title}
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
            <s>${product.price}</s>
          </Typography>
          <Typography variant="h5">
            {" "}
            $
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
            onClick={() => navigate(`/BuyProduct/${product.title}`)}
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
      </Box>
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
  }).isRequired,
};
export default ProductDetail;
