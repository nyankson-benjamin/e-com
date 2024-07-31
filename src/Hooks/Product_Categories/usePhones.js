import React, { useEffect, useState } from "react";
import { DUMMy_API } from "../../Services/api";
export default function usePhones() {
  const [phones, setPhones] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await DUMMy_API.get("product/category/smartphones");
        setLoading(false);
        setPhones(response?.data?.products);
        // console.log(response?.data?.products);
      } catch (error) {}
    };
    fetch();
  }, []);
  return [phones, loading];
}
