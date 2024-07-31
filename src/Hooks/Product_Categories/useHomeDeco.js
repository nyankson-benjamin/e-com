import React, { useEffect, useState } from "react";
import { DUMMy_API } from "../../Services/api";

export default function useHomeDeco() {
  const [deco, setDeco] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await DUMMy_API.get(
          "products/category/home-decoration"
        );
        setLoading(false);
        // console.log(response);
        setDeco(response?.data?.products);
      } catch (error) {}
    };
    fetch();
  }, []);
  return [deco, loading];
}
