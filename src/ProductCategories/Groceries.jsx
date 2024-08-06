import ProductCard from "../Products/ProductCard";
import { Grid, Box } from "@mui/material";
import ProductSkeleton from "../components/ProductSkeleton";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
export default function Groceries() {
  const [data, isLoading] = useFetchProducts();
  const groceries = data?.filter(
    (groceries) => groceries.category === "groceries"
  );
  return (
    <div>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <Box
          sx={{
            margin: "50px",
            overFlow: "scroll",
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
