import React from "react";
import Coin from "./Coin";
import useCryptoData from "../hooks/useCryptoData";

const CryptoList = () => {
  const { data, isLoaded, error } = useCryptoData();

  return (
    <div className="grid grow place-items-center">
      {(() => {
        if (error) return <div>Error: {error.message}</div>;
        if (!isLoaded) return <div>Loading...</div>;
        return (
          <div className="w-11/12 max-w-screen-lg rounded-2xl bg-white p-4 drop-shadow-xl dark:bg-zinc-900">
            {/* HEADER */}
            <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              <div className="hidden p-2 text-right sm:block">#</div>
              <div className="p-2 text-left">Coin</div>
              <div className="p-2 text-right">Price</div>
              <div className="hidden p-2 text-right sm:block">24h %</div>
              <div className="hidden p-2 text-right md:block">7d %</div>
              <div className="hidden p-2 text-right lg:block">Market Cap</div>
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
