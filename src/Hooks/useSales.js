import React, { useEffect, useState } from "react";
import { API } from "../Services/api";
export default function useSales() {
  const [sales, setSales] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await API.get("/Sales");
        // console.log(response);
        setSales(response?.data);
      } catch (error) {}
    };
    fetch();
  }, []);
  return [sales];
}
