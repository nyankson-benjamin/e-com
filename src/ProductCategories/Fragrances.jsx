import React from "react";
import AppsBar from "../TopBar/AppBar";
import useFragrances from "../Hooks/Product_Categories/useFragrance";
import ProductCard from "../Products/ProductCard";
import { Grid, Box } from "@mui/material";
import ProductSkeleton from "../components/ProductSkeleton";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
export default function Fragrances() {
  // const [fragrances, loading] = useFragrances();
  const [data, isLoading] = useFetchProducts();
  const fragrances = data?.filter(
    (fragrance) => fragrance.category === "fragrances"
  );
  return (
    <div>
      <AppsBar ItemCategory="Fragrances" />
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
            {fragrances?.map((fragrances) => (
              <Grid item key={fragrances.id} xs={12} lg={3}>
                <ProductCard product={fragrances} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
}
