import React from "react";
import AppsBar from "../TopBar/AppBar";
import ProductCard from "../Products/ProductCard";
import { Grid, Box } from "@mui/material";
import ProductSkeleton from "../components/ProductSkeleton";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
export default function HomeDeco() {
  const [data, isLoading] = useFetchProducts();
  const HomeDeco = data?.filter((deco) => deco.category === "home-decoration");
  return (
    <div>
      <AppsBar ItemCategory="Home Decorations" />
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
            {HomeDeco?.map((deco) => (
              <Grid item key={deco.id} xs={12} lg={3}>
                <ProductCard product={deco} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
}
