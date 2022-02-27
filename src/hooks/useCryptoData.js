import { useEffect, useState } from "react";
import axios from "axios";

const useCryptoData = (url) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    axios
      .get(url)
      .then((response) => (isSubscribed ? setData(response.data) : null))
      .catch((error) => (isSubscribed ? setError(error) : null))
      .finally(() => (isSubscribed ? setIsLoaded(true) : null));

    return () => (isSubscribed = false);
  }, [url]);

  return { data, isLoaded, error };
};

export default useCryptoData;
