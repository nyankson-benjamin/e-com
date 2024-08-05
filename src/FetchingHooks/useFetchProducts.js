import { useEffect, useState } from "react";
import { DUMMy_API } from "../Services/api";

export default function useFetchProducts() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState("/?limit=10&skip=0");
  const [error, setError] = useState("");

  // Function to update the API URL
  const updateUrl = (newUrl) => {
    setUrl(newUrl);
  };



  // Function to fetch data from the API
  const fetchData = async (apiUrl) => {
    setIsLoading(true);
    try {
      const response = await DUMMy_API.get(`/products/${apiUrl}&&sortBy=title&order=asc`);
      const products = response.data.products;
      setData((products));
      setCount(response.data.total);
      setError("");
    } catch (err) {
      setError(err.message);
      setData([]);
      setCount(0);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect hook to fetch data when the URL changes
  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, isLoading, error, count, updateUrl };
}
