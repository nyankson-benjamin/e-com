import AppsBar from "../TopBar/AppBar";
import ProductCard from "../Products/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
function Laptops() {
  const [data, isLoading] = useFetchProducts();
  const laptop = data?.filter((laptop) => laptop.category === "laptops");
  return (
    <div>
      <AppsBar ItemCategory="Laptops" />

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
          <Grid spacing={2} container>
            {laptop?.map((laptop) => (
              <Grid item key={laptop.id} xs={12} lg={3}>
                <ProductCard product={laptop} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
}

export default Laptops;
