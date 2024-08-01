import { useEffect, useState } from "react";
import AppsBar from "../TopBar/AppBar";
import ProductCard from "../Products/ProductCard";
import { Grid, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductSkeleton from "../components/ProductSkeleton";
import { DUMMy_API,  } from "../Services/api";

export default function Fragrances() {
  const [categoryData, setCategoryData] = useState();
  const { category } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await DUMMy_API.get(`/products/category/${category}`);

        setCategoryData(response?.data?.products);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetch();
  }, [category]);
  return (
    <div>
      <AppsBar ItemCategory={category} />
      {loading ? (
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
            {categoryData?.map((fragrances) => (
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
