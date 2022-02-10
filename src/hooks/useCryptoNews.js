import { useEffect, useState } from "react";
import axios from "axios";

const useCryptoNews = () => {
  const URL = "https://data.messari.io/api/v1/news";

  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(URL);
      setData(response.data.data);
    } catch (error) {
      setError(error);
    }
    setIsLoaded(true);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoaded, error };
};

export default useCryptoNews;
