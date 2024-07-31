import { useEffect, useState } from "react";
import { API } from "../Services/api";

export default function useFetchProducts(url="") {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("")
  function getUniqueCategories(products) {
    const categories = products?.map(product => product?.category);
     (localStorage.setItem("categories",JSON.stringify([...new Set(categories)])));
  }
  useEffect(() => {
    const fetch = async () => {
      try {
        setisLoading(true);
        const response = await API.get("/products/"+url);
        // console.log('response',response)
        setisLoading(false);
        setData(response?.data);
        getUniqueCategories(response?.data)
        setError("")
      } catch (error) {
        setError(error.message)
        setisLoading(false)
      }
    };
    fetch();
  }, []);
  return [data, isLoading, error,];
}
