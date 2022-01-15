import React from "react";
import Coin from "./Coin";
import useCryptoData from "../hooks/useCryptoData";

const CryptoList = () => {
  const { data, isLoaded, error } = useCryptoData();

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
            <th className="sticky p-2 text-xs text-left bg-gray-100 left-9">
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
    <div className="flex items-center py-5 mx-5 overflow-auto grow">
      {content}
    </div>
  );
};

export default CryptoList;
