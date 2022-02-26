import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CoinDetails = () => {
  const { coinId } = useParams();

  const [coin, setCoin] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchCoin = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      );
      setCoin(response.data);
    } catch (error) {
      setError(error);
    }
    setIsLoaded(true);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div className="grid grow place-items-center">
      {(() => {
        if (error) return <div>Error: {error.message}</div>;
        if (!isLoaded) return <div>Loading...</div>;
        return <h1>{`${coin.name} (${coin.symbol.toUpperCase()})`}</h1>;
      })()}
    </div>
  );
};

export default CoinDetails;
