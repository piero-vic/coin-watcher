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
            <div>
              <p className="flex items-baseline gap-2">
                <img className="h-6 w-6" src={coin.image.small} alt="" />
                <span className="text-xl">{coin.name}</span>
                <span className="opacity-60">{`${coin.symbol.toUpperCase()}`}</span>
              </p>
              <p className="flex items-baseline gap-2 text-2xl">
                <span>{formatValue(coin.market_data.current_price.usd)}</span>
                <span className="text-base">
                  {coin.market_data.price_change_percentage_24h}
                </span>
              </p>
            </div>
            {/* DATA */}
            <div className="mt-4 flex flex-col gap-4 md:flex-row">
              {/* INFO */}
              <div className="flex w-full flex-col gap-2 rounded-2xl bg-white p-4 drop-shadow-xl dark:bg-zinc-900 md:w-5/12">
                <div>
                  <p className="font-medium opacity-60">Market Cap</p>
                  <p>{formatValue(coin.market_data.market_cap.usd)}</p>
                </div>
                <div>
                  <p className="font-medium opacity-60">24h Trading Vol</p>
                  <p>{formatValue(coin.market_data.total_volume.usd)}</p>
                </div>
                {Object.keys(coin.market_data.fully_diluted_valuation)
                  .length !== 0 ? (
                  <div>
                    <p className="font-medium opacity-60">Fully Diluted Valuation</p>
                    <p>{formatValue(coin.market_data.fully_diluted_valuation.usd)} </p>
                  </div>
                ) : null}
                <div>
                  <p className="font-medium opacity-60">Circulating Supply</p>
                  <p>{coin.market_data.circulating_supply?.toLocaleString("en-US")}</p>
                </div>
                <div>
                  <p className="font-medium opacity-60">Total Supply</p>
                  <p>{coin.market_data.total_supply?.toLocaleString("en-US") || "∞"}</p>
                </div>
                <div>
                  <p className="font-medium opacity-60">Max Supply</p>
                  <p>{coin.market_data.max_supply?.toLocaleString("en-US") || "∞"}</p>
                </div>
              </div>
              {/* CHART */}
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
