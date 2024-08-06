import ProductCard from "../Products/ProductCard";
import { Grid, Box } from "@mui/material";
import ProductSkeleton from "../components/ProductSkeleton";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
export default function SkinCare() {
  const [data, isLoading] = useFetchProducts();
  const skinCare = data?.filter((skincare) => skincare.category === "skincare");
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
