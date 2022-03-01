import React from "react";
import { formatValue } from "../utils/utils";

const CoinMarketInfo = (props) => {
  const {
    market_cap,
    total_volume,
    fully_diluted_valuation,
    circulating_supply,
    total_supply,
    max_supply,
  } = props.marketData;

  return (
    <div className="flex w-full flex-col gap-2 rounded-2xl bg-white p-4 drop-shadow-xl dark:bg-zinc-900 md:order-first md:w-4/12">
      <div>
        <p className="font-medium opacity-60">Market Cap</p>
        <p>{formatValue(market_cap.usd)}</p>
      </div>
      <div>
        <p className="font-medium opacity-60">24h Trading Vol</p>
        <p>{formatValue(total_volume.usd)}</p>
      </div>
      {Object.keys(fully_diluted_valuation).length !== 0 ? (
        <div>
          <p className="font-medium opacity-60">Fully Diluted Valuation</p>
          <p>{formatValue(fully_diluted_valuation.usd)} </p>
        </div>
      ) : null}
      <div>
        <p className="font-medium opacity-60">Circulating Supply</p>
        <p>{circulating_supply?.toLocaleString("en-US")}</p>
      </div>
      <div>
        <p className="font-medium opacity-60">Total Supply</p>
        <p>{total_supply?.toLocaleString("en-US") || "∞"}</p>
      </div>
      <div>
        <p className="font-medium opacity-60">Max Supply</p>
        <p>{max_supply?.toLocaleString("en-US") || "∞"}</p>
      </div>
    </div>
  );
};

export default CoinMarketInfo;
