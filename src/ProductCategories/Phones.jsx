import React from "react";
import AppsBar from "../TopBar/AppBar";
import ProductCard from "../Products/ProductCard";
import { Grid, Box } from "@mui/material";
import ProductSkeleton from "../components/ProductSkeleton";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
export default function Phones() {
  const [data, isLoading] = useFetchProducts();
  const phones = data?.filter((phone) => phone.category === "smartphones");
  return (
    <div>
      <AppsBar ItemCategory="Phones" />
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
            {phones?.map((phones) => (
              <Grid item key={phones.id} xs={12} lg={3}>
                <ProductCard product={phones} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
}
