import React from "react";
import { Box, Skeleton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const ProductSkeleton = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-around", py: 8 }}>
        <Skeleton variant="rectangular" height={30} width="250px" />
      </Box>

      <Skeleton
        variant="rectangular"
        width={320}
        height={44}
        sx={{
          borderRadius: "8px",
        }}
      />

      <Grid
        container
        rowSpacing={8}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent={["space-around", "space-evenly", null, "space-between"]}
        mt={2}
      >
        {new Array(5).fill("items").map((number, index) => (
          <Grid key={index}>
            <Skeleton variant="rectangle" width={251} height={167} />
            <Box
              width={251}
              height={116}
              sx={{ my: 1, borderRadius: "0px 0px 8px 8px" }}
            >
              <Skeleton />
              <Skeleton width="60%" />
              <Skeleton width="40%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductSkeleton;
