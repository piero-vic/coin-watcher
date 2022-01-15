import { useEffect, useState } from "react";
import axios from "axios";

const useCryptoData = () => {
  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d";

  const REQUEST_HEADER = {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  };

  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(URL, { headers: REQUEST_HEADER });
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setIsLoaded(true);
  };

  useEffect(() => {
    getData();

    const interval = setInterval(() => {
      getData();
    }, 90000);

    return () => clearInterval(interval);
  }, []);

  return { data, isLoaded, error };
};

export default useCryptoData;
