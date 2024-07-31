import React, { useEffect, useState } from "react";
import { DUMMy_API } from "../../Services/api";
export default function useLaptops() {
  const [laptops, setLaptops] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await DUMMy_API.get("products/category/laptops");
        setLoading(false);
        // console.log(response);
        setLaptops(response?.data?.products);
      } catch (error) {}
    };
    fetch();
  }, []);
  return [laptops, loading];
}
