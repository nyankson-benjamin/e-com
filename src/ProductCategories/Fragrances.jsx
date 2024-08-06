import ProductCard from "../Products/ProductCard";
import { Grid, Box } from "@mui/material";
import ProductSkeleton from "../components/ProductSkeleton";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
export default function Fragrances() {
  const [data, isLoading] = useFetchProducts();
  const fragrances = data?.filter(
    (fragrance) => fragrance.category === "fragrances"
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
