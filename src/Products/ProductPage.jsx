import useGetProductDetails from "../FetchingHooks/useGetProductDetails";
import RelatedProducts from "./RelatedProducts";
import { Box,  } from "@mui/material";
import Header from "../components/typography/Header"

import ProductDetail from "./ProductDetail";
function ProductPage() {
  const {data, isLoading, loadingRelated,related} = useGetProductDetails();
  


  return (
    <div >
     { !isLoading && data && <Header text={data?.title}/>}
      {
        isLoading && <div className="w-[300px] h-[300px] flex justify-center items-center"><p>Loading...</p></div> 
      }
      {!isLoading && data.title && (
        <Box sx={{mb:20,}} className="mt-5">
          <Box
            sx={{
              // height: "200px",
              display: "flex",
              justifyContent: "center",
              // flexDirection: "column",
              // mt: 5,
  
            }}
          >
            <ProductDetail product={data} />
          </Box>

          <Box >
            {related?.length>1 && (
              <>
                <h3 className="font-bold py-5 bg-white mb-5 text-center">RELATED PRODUCTS</h3>
                <RelatedProducts related={related} loading={loadingRelated} />
              </>
            )}
          </Box>
        </Box>
      )}
      
    </div>
  );
}

export default ProductPage;
