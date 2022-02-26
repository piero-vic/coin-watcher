import { useEffect, useState } from "react";
import axios from "axios";

const useCryptoData = (url) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
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

export default useCryptoData;
