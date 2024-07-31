import React, { useState, useEffect } from "react";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import RelatedProducts from "./RelatedProducts";
import AppsBar from "../TopBar/AppBar";
import ProductSlider from "../components/Slider/ProductSlider";
import AddToCart from "./AddToCart";
import Footer from "../components/Footer";
import Cart from "../components/Cart/Cart";
import ProductCard from "./ProductCard";
function BuyProduct() {
  const [data, isLoading] = useFetchProducts();
  const [related, setRelated] = useState();
  const { title } = useParams();
  const product = data?.find((product) => product.title === title);

  useEffect(() => {
    if (product) {
      setRelated(
        data?.filter((relate) => relate.category === product.category)
      );
    }
  }, [, data, product]);
  return (
    <Box>
      <AppsBar />
      {product && (
        <Box>
          <AddToCart product={product} />
        </Box>
      )}
      <br />
      <br />
      <ProductSlider data={related} />
      <br />
      {/* <Footer /> */}
    </Box>
  );
}

export default BuyProduct;
