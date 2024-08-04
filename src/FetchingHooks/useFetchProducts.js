import { useEffect, useState } from "react";
import { API } from "../Services/api";

export default function useFetchProducts() {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(false);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  

  function shuffleByCategory(products) {
    // Shuffle the entire products array
    shuffleArray(products);
  
    // Return the shuffled products
    return products;
  }
  
  const [error, setError] = useState("")
  function getUniqueCategories(products) {
    const categories = products?.map(product => product?.category);
     (localStorage.setItem("categories",JSON.stringify([...new Set(categories)])));
  }
  useEffect(() => {
    const fetch = async () => {
      try {
        setisLoading(true);
        const response = await API.get("/products/");
        // console.log('response',response)
        setisLoading(false);
        setData(shuffleByCategory(response?.data));
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
