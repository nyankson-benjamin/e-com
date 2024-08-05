import { useState, useRef } from "react";
import AppsBar from "../TopBar/AppBar";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
import { Box, Grid } from "@mui/material";
import ProductCard from "../Products/ProductCard";
import ProductSlider from "../components/Slider/ProductSlider";
import ProductSkeleton from "../components/ProductSkeleton";
import Paginate from "../components/Paginate";

export default function Products() {
  const {data, isLoading, error, count, updateUrl} = useFetchProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const sectionRef = useRef(null);

  const itemsPerPage = 10;
  const pageCount = Math.ceil(count / itemsPerPage);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    setFilter("");
    updateUrl(`/?limit=${itemsPerPage}&skip=${(value - 1) * itemsPerPage}`);
  };

  const handleClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ overflow: "scroll", height: "100%" }}>
      <AppsBar search={filter} handleChange={handleFilterChange} />
  
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        (() => {
          if (error) {
            return <div>{error}</div>;
          } else if (data?.length) {
            return (
              <div>
                <ProductSlider data={data} isLoading={isLoading} />
                <h3 className="font-bold py-5 bg-white" ref={sectionRef}>
                  ALL PRODUCTS
                </h3>
                <Box sx={{ margin: "50px", mt: "20px" }}>
                  <Grid container spacing={3} columns={12}>
                    {data.map((product) => (
                      <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} showAll />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Paginate
                  handleClick={handleClick}
                  handlePageChange={handlePageChange}
                  currentPage={currentPage}
                  pageCount={pageCount}
                />
              </div>
            );
          } else {
            return <p>Nothing was found</p>;
          }
        })()
      )}
    </div>
  );
  
}
