import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(url).then(
      (res) => {
        setData(res.data);
        setIsLoaded(true);
      },
      (error) => {
        setError(error);
        setIsLoaded(true);
      }
    );
  }, [url]);

  return { data, isLoaded, error };
};

const CryptoList = () => {
  const { data, isLoaded, error } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
  );

  let content = null;

  if (error) {
    content = <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <div>Loading...</div>;
  } else {
    content = (
      <table className="w-full rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-right">#</th>
            <th className="p-2 text-left">Coin</th>
            <th className="p-2 text-right">Price</th>
            <th className="p-2 text-right">24h %</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coinData) => (
            <Coin coinData={coinData} key={coinData.id} />
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div className="p-5 grow flex justify-center items-center">{content}</div>
  );
};

export default CryptoList;
