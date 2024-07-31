import React, { useEffect, useState } from "react";
import { DUMMy_API } from "../../Services/api";
export default function useSkinCare() {
  const [skinCare, setSkinCare] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await DUMMy_API.get("products/category/skincare");
        setLoading(false);
        // console.log(response);
        setSkinCare(response?.data?.products);
      } catch (error) {}
    };
    fetch();
  }, []);
  return [skinCare, loading];
}
