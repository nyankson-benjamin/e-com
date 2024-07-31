import React from "react";
import AppsBar from "../TopBar/AppBar";
import useGroceries from "../Hooks/Product_Categories/useGroceries";
import ProductCard from "../Products/ProductCard";
import { Grid, Box } from "@mui/material";
import ProductSkeleton from "../components/ProductSkeleton";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
export default function Groceries() {
  // const [groceries, loading] = useGroceries();
  const [data, isLoading] = useFetchProducts();
  const groceries = data?.filter(
    (groceries) => groceries.category === "groceries"
  );
  return (
    <div>
      <AppsBar ItemCategory="Groceries" />
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
            {groceries?.map((groceries) => (
              <Grid item key={groceries.id} xs={12} lg={3}>
                <ProductCard product={groceries} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
}
