import React from "react";
import Coin from "./Coin";
import useCryptoData from "../hooks/useCryptoData";

const CryptoList = () => {
  const { data, isLoaded, error } = useCryptoData();

  return (
    <div className="flex items-center py-5 mx-5 overflow-auto grow">
      {(() => {
        if (error) return <div className="mx-auto">Error: {error.message}</div>;
        if (!isLoaded) return <div className="mx-auto">Loading...</div>;
        return (
          <div className="w-full bg-gray-100 rounded-2xl p-4">
            {/* HEADER */}
            <div className="grid grid-cols-2 gap-4">
              <div className="hidden p-2 text-xs text-right">#</div>
              <div className="p-2 text-xs text-left">Coin</div>
              <div className="p-2 text-xs text-right">Price</div>
              <div className="hidden p-2 text-xs text-right">24h %</div>
              <div className="hidden p-2 text-xs text-right">7d %</div>
              <div className="hidden p-2 text-xs text-right">Market Cap</div>
            </div>
            {/* BODY */}
            <div>
              {data.map((coinData) => (
                <Coin coinData={coinData} key={coinData.id} />
              ))}
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default CryptoList;
