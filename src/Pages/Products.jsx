import { useState, useRef, useEffect } from "react";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
import { Box, Grid } from "@mui/material";
import ProductCard from "../Products/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import Paginate from "../components/Paginate";
import NoItemFound from "../components/NoItemFound";
import { useSelector } from "react-redux";
import Header from "../components/typography/Header";

export default function Products() {
  const itemsPerPage = 12;
  const {data, isLoading, error, count, updateUrl} = useFetchProducts(itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);

  const {searchItem} = useSelector(state=>state.searchItem)
  const pageCount = Math.ceil(count / itemsPerPage);
  
 

  useEffect(()=>{
    updateUrl("search?q="+searchItem)

  },[searchItem])

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    updateUrl(`/?limit=${itemsPerPage}&skip=${(value - 1) * itemsPerPage}`);
  };

  const handleClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ overflow: "scroll", height: "100%", }} className="mb-10" ref={sectionRef}>
<Header text={searchItem ? "You searched for " + searchItem : "All prodcucts"}/>
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        (() => {
          if (error) {
            return <div>{error}</div>;
          } else if (data?.length) {
            return (
              <div>
                <Box sx={{ margin: "50px", mt: "20px" }}>
                  <Grid container spacing={3} columns={12}>
                    {data.map((product) => (
                      <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} showAll />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                {count > 12 && <Paginate
                  handleClick={handleClick}
                  handlePageChange={handlePageChange}
                  currentPage={currentPage}
                  pageCount={pageCount}
                />}
              </div>
            );
          } else {
            return <NoItemFound/>;
          }
        })()
      )}
    </div>
  );
  
}
