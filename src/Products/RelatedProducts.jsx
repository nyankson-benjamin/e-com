import ProductSkeleton from "../components/ProductSkeleton";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import { Grid, Box } from "@mui/material";


function RelatedProducts({ related, loading }) {
  return (
    <div className="productCard" style={{ height: "200px" }}>
      {loading ? (
        <ProductSkeleton />
      ) : (
        <Box sx={{ margin: "50px", mt: "20px" }}>

        <Grid container spacing={3} columns={12}>
          {related?.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
          </Box>
      )}
    </div>
  );
}

RelatedProducts.propTypes={
  related:PropTypes.array,
  loading:PropTypes.bool
}
export default RelatedProducts;
