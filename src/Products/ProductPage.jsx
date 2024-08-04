import React, { useEffect, useState } from "react";
import useFetchProducts from "../FetchingHooks/useFetchProducts";
import { useParams } from "react-router-dom";
import AppsBar from "../TopBar/AppBar";
import RelatedProducts from "./RelatedProducts";
import useScreenWidth from "../Hooks/useScreenWidth";
import { Box,  } from "@mui/material";
import Header from "../components/typography/Header"

// import Footer from "../components/Footer";
import ProductDetail from "./ProductDetail";
function ProductPage() {
  const [data, isLoading] = useFetchProducts();
  const { title } = useParams();
  const [related, setRelated] = useState();
  const product = data?.find((product) => product.title === title);
  

  useEffect(() => {
    if (product) {
      setRelated(
        data?.filter((relate) => relate.category === product.category)
      );
    }
  }, [ data, product]);

  let original = related?.filter((item) => item.title !== product.title);
  return (
    <div >
      <AppsBar />
     { !isLoading && product && <Header text={product?.title}/>}
      {
        isLoading && <div className="w-[300px] h-[300px] flex justify-center items-center"><p>Loading...</p></div> 
      }
      {product && (
        <Box sx={{mb:20}}>
          <Box
            sx={{
              // height: "200px",
              display: "flex",
              justifyContent: "center",
              // flexDirection: "column",
              // mt: 5,
  
            }}
          >
            <ProductDetail product={product} />
          </Box>

          <Box >
            {original?.length>1 && (
              <>
                <h3 className="font-bold py-5 bg-white mb-5">RELATED PRODUCTS</h3>
                <RelatedProducts related={original} loading={isLoading} />
              </>
            )}
          </Box>
        </Box>
      )}
      
    </div>
  );
}

export default ProductPage;
