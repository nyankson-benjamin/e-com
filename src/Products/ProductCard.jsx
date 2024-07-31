import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import ProductSkeleton from "../components/ProductSkeleton";

function ProductCard({ product, isLoading, showAll }) {
  return (
    <div className="productCard bg-white">
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <Link to={`/productPage/${product.title}`}>
          <Box
            sx={{
              filter: "drop-shadow(0px 0px 9px rgba(153, 153, 153, 0.25))",
              border: "1px solid #F2F4F7",
              borderTopRightRadius: 2,
            }}
          >
            <Box>
              <img
                src={
                   product.images[0]
                }
                alt={product.title }
                style={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "20px 20px 0px 0px",
                }}
                className="bigImage"
                title={product.title}
              />
            </Box>
            <Box sx={{ bgcolor: "#ffc801", color:'white',  }}>
              <h3 style={{ padding: 5 }}>{product.title?.length > 20 ? product.title?.slice(0,20)+'...' : product.title}</h3>
            </Box>

            
          </Box>
        </Link>
      )}
    </div>
  );
}

export default ProductCard;
