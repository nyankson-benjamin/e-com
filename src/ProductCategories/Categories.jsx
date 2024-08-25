import { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";
import { Grid, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductSkeleton from "../components/ProductSkeleton";
import { DUMMy_API } from "../Services/api";
import Header from "../components/typography/Header";
import { capitalize } from "../utils/utils";
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

  window.document.title = "Categories | " + capitalize(category) + " | E-Shop";

  return (
    <div>
      <Header text={category} />
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
          <Grid container spacing={2} columns={12}>
            {categoryData?.map((fragrances) => (
              <Grid item key={fragrances.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={fragrances} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
}
