import React from "react";
import cryptoData from "../placeholder_data.json";
import Coin from "./Coin";

const CryptoList = () => {
  return (
    <div className="p-5">
      <table className="w-full rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">#</th>
            <th className="p-2 text-left">Coin</th>
            <th className="p-2 text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((coinData) => (
            <Coin coinData={coinData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
