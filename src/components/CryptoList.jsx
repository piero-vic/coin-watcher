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
          <div className="w-full p-4 bg-gray-100 rounded-2xl">
            {/* HEADER */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              <div className="hidden p-2 text-xs text-right sm:block">#</div>
              <div className="p-2 text-xs text-left">Coin</div>
              <div className="p-2 text-xs text-right">Price</div>
              <div className="hidden p-2 text-xs text-right sm:block">
                24h %
              </div>
              <div className="hidden p-2 text-xs text-right md:block">7d %</div>
              <div className="hidden p-2 text-xs text-right lg:block">
                Market Cap
              </div>
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
