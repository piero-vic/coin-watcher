import React from "react";
import { useParams } from "react-router-dom";
import useCryptoData from "../hooks/useCryptoData";
import { formatValue } from "../utils/utils";
import { SingleCoin } from "../utils/api";

const CoinDetails = () => {
  const { coinId } = useParams();

  const { data: coin, isLoaded, error } = useCryptoData(SingleCoin(coinId));

  return (
    <div className="grid grow place-items-center">
      {(() => {
        if (error) return <div>Error: {error.message}</div>;
        if (!isLoaded) return <div>Loading...</div>;
        return (
          <div className="w-full place-self-start px-5">
            {/* HEADER */}
            <div className="mt-2">
              <p className="flex items-center gap-2">
                <img className="h-6 w-6" src={coin.image.small} alt="" />
                <span>{coin.name}</span>
                <span className="opacity-90">{`(${coin.symbol.toUpperCase()})`}</span>
              </p>
              <p className="flex items-baseline gap-2 text-2xl">
                <span>{formatValue(coin.market_data.current_price.usd)}</span>
                <span className="text-base">
                  ({coin.market_data.price_change_percentage_24h})
                </span>
              </p>
            </div>
            {/* DATA */}
            <div className="mt-4 flex flex-col gap-4 md:flex-row">
              <div className="w-full rounded-2xl bg-white p-4 drop-shadow-xl dark:bg-zinc-900 md:w-5/12">
                This is where the data will be.
              </div>
              <div className="w-full rounded-2xl bg-white p-4 drop-shadow-xl dark:bg-zinc-900">
                This is where the chart will be.
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default CoinDetails;
