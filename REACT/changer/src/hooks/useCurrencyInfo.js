import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState(null); // Initialize state for data

  useEffect(() => {
    const baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@1/v1";
    fetch(`${baseURL}/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        if (res[currency]) {
          setData(res[currency]);
        } else {
          console.error("Currency data not found");
        }
      })
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);

  return data;
};

export default useCurrencyInfo;