import { useEffect, useState } from "react";
import axios from "axios";

const useCryptoData = (url) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finally(() => setIsLoaded(true));
  }, [url]);

  return { data, isLoaded, error };
};

export default useCryptoData;
