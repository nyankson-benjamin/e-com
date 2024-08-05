import { useEffect, useState } from "react";
import { DUMMy_API } from "../Services/api";
import { useParams } from "react-router-dom";
 

export default function useFetchProducts() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [related, setRelated]= useState([])
  const [loadingRelated, setLoadingRelated] = useState(false)
  const [relatedError, setRelatedError] = useState("")
  

const {title}= useParams()

const getRelatedProduct = async (category)=>{
    setLoadingRelated(true)
    try {
        const res = await DUMMy_API.get("products/category/"+category)
        setRelated(res.data.products?.filter(item=>item?.title !== title))
        setLoadingRelated(false)
        setRelatedError("")
    } catch (error) {
        setLoadingRelated(false)
        setRelatedError(error.message)
    }finally{
        setLoadingRelated(false)
    }
}
  // Function to fetch data from the API
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await DUMMy_API.get(`/products/search?q=${title}`);
      const products = response.data.products;
      if(products?.length){
        getRelatedProduct(response.data.products[0].category)

      }
      setData((products[0]));
      setError("");
    } catch (err) {
      setError(err.message);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect hook to fetch data when the URL changes
  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error,relatedError, loadingRelated,related };
}
