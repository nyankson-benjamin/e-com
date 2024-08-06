import useGetProductDetails from "../FetchingHooks/useGetProductDetails";
import { Box } from "@mui/material";
import RelatedProducts from "./RelatedProducts";
import AddToCart from "./AddToCart";
function BuyProduct() {
  const {data, isLoading, error,relatedError, loadingRelated,related} = useGetProductDetails();

  return (
    <Box>
      {!isLoading && data && (
        <Box>
          <AddToCart product={data} />
        </Box>
      )}
      <br />
      <br />
      {relatedError && <div>{relatedError}</div>}
      {!loadingRelated && !relatedError?.length && <RelatedProducts related={related} loading={loadingRelated} />}
      <br />
    </Box>
  );
}

export default BuyProduct;
