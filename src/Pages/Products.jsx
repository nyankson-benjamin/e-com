import React, { useState, useEffect, useRef } from "react";
import AppsBar from "../TopBar/AppBar";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
import { Box, Grid, Stack } from "@mui/material";
import LeftBar from "../Sidebars/LeftBar";
import RightBar from "../Sidebars/RightBar";
import useScreenWidth from "../Hooks/useScreenWidth";
import ProductCard from "../Products/ProductCard";
import ProductSlider from "../components/Slider/ProductSlider";
import Footer from "../components/Footer";
import Paginate from "../components/Paginate";
import ProductSkeleton from "../components/ProductSkeleton";
export default function Products() {
  const [data, isLoading, error] = useFetchProducts();
  const [screenWidth] = useScreenWidth();
  const [currentPage, setCurrentPage] = useState(1);
  const [filt, setFilter] = useState("");
  const [product, setProduct] = useState();
  const sectionRef = useRef(null);

  const [itemsPerPage] = useState(12);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageCount = Math.ceil(data?.length / itemsPerPage);
  const handleClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    setFilter("");
  };
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    setProduct(data?.slice(startIndex, endIndex));

    if (filt) {
      setCurrentPage(1);
      setProduct(
        data
          ?.filter((filter) =>
            filter.title.toLowerCase().includes(filt.toLowerCase())
          )
          .slice(startIndex, endIndex)
      );
    }
  }, [data, startIndex, endIndex]);
  return (
    <div style={{ overflow: "scroll", height: "100%" }}>
      <AppsBar search={filt} handleChange={handleChange} />


      {isLoading ? (
        <ProductSkeleton />
      ): error ? <div>{error}</div> : (
        <div>
          <ProductSlider data={data} isLoading={isLoading} />{" "}
          {product?.length >= 1 ? (
            <div>

              <h3 className="font-bold py-5 bg-white" ref={sectionRef}>
                ALL PRODUCTS
              </h3>

              <Box
                sx={{
                  margin: "50px",
                  // width: "50%",
                  overFlow: "scroll",
                  // height: "200px",
                  mt: "20px",
                }}
              >
                <Grid container spacing={3} columns={12}>
                  {product?.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard
                        product={product}
                        isLoading={isLoading}
                        showAll={true}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Paginate
                data={product}
                handleClick={handleClick}
                handlePageChange={handlePageChange}
                currentPage={currentPage}
                pageCount={pageCount}
              />
              <br />
            </div>
          ) : (
            <p>Nothing was found</p>
          )}
        </div>
      )}

      {/* <Footer /> */}
    </div>
  );
}
