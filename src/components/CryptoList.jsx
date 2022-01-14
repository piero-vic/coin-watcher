import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import axios from "axios";

const CryptoList = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const getData = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d",
        {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      )
      .then(
        (res) => {
          setData(res.data);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  };

  useEffect(() => {
    getData();

    const interval = setInterval(() => {
      getData();
    }, 90000);

    return () => clearInterval(interval);
  }, []);

  let content = null;

  if (error) {
    content = <div className="mx-auto">Error: {error.message}</div>;
  } else if (!isLoaded) {
    content = <div className="mx-auto">Loading...</div>;
  } else {
    content = (
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="sticky left-0 p-2 text-xs text-right bg-gray-100">
              #
            </th>
            <th className="sticky left-9 p-2 text-xs text-left bg-gray-100">
              Coin
            </th>
            <th className="p-2 text-xs text-right">Price</th>
            <th className="p-2 text-xs text-right">24h %</th>
            <th className="p-2 text-xs text-right">7d %</th>
            <th className="p-2 text-xs text-right">Market Cap</th>
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
    <div className="flex items-center py-5 mx-5 grow overflow-auto">
      {content}
    </div>
  );
};

export default CryptoList;
