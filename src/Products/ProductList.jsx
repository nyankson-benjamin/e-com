import React, { useEffect } from "react";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
import AppsBar from "../TopBar/AppBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
function ProductList({ product }) {
  const [data] = useFetchProducts();

  return (
    <div >
      {/* <AppsBar /> */}
      {/* {data &&
        data?.products.map((products) => (
          <p key={products.id}>{products.title}</p>
        ))} */}

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.images[0]}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ProductList;
