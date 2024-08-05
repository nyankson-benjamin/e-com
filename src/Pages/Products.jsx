import { useState, useRef } from "react";
import AppsBar from "../TopBar/AppBar";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
import { Box, Grid } from "@mui/material";
import ProductCard from "../Products/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import Paginate from "../components/Paginate";
import NoItemFound from "../components/NoItemFound";

export default function Products() {
  const {data, isLoading, error, count, updateUrl} = useFetchProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [serachItem, setSearchItem] = useState("")
  const sectionRef = useRef(null);

  const itemsPerPage = 12;
  const pageCount = Math.ceil(count / itemsPerPage);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value)
    if(e.key && e.key === "Enter"){
      console.log("key",e.key)
      updateUrl("search?q="+filter)
      setSearchItem(filter)
    }

    if(!filter){
      updateUrl("search?q=")
      setSearchItem("")
    }
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
                <h3 className="font-bold py-5 bg-white " ref={sectionRef}>
                  {serachItem ? `You searched for ${serachItem}` : "ALL PRODUCTS"}
                </h3>
  
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
