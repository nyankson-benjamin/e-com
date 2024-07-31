import React from "react";
import AppsBar from "../TopBar/AppBar";
import useSkinCare from "../Hooks/Product_Categories/useSkinCare";
import ProductCard from "../Products/ProductCard";
import { Grid, Box } from "@mui/material";
import ProductSkeleton from "../components/ProductSkeleton";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
export default function SkinCare() {
  // const [skinCare, loading] = useSkinCare();
  const [data, isLoading] = useFetchProducts();
  const skinCare = data?.filter((skincare) => skincare.category === "skincare");
  return (
    <div>
      <AppsBar ItemCategory="Skin Care" />
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <Box
          sx={{
            margin: "50px",
            // width: "50%",
            overFlow: "scroll",
            // height: "200px",
            mt: "20px",
          }}
        >
          <Grid container spacing={2}>
            {skinCare?.map((skincare) => (
              <Grid item key={skincare.id} xs={12} lg={3}>
                <ProductCard product={skincare} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
}
