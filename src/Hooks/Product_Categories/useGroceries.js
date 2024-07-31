import React, { useEffect, useState } from "react";
import { DUMMy_API } from "../../Services/api";
export default function useGroceries() {
  const [groceries, setGroceries] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await DUMMy_API.get("products/category/groceries");
        setLoading(false);
        // console.log(response);
        setGroceries(response?.data?.products);
      } catch (error) {}
    };
    fetch();
  }, []);
  return [groceries, loading];
}
