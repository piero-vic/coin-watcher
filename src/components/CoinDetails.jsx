import React from "react";
import { useParams } from "react-router-dom";
import useCryptoData from "../hooks/useCryptoData";
import { SingleCoin } from "../utils/api";
import CoinHeader from "./CoinHeader"
import LineChart from "./LineChart";
import CoinMarketInfo from "./CoinMarketInfo";

const CoinDetails = () => {
  const { coinId } = useParams();
  const { data: coin, isLoaded, error } = useCryptoData(SingleCoin(coinId));

  return (
    <div className="flex grow items-center justify-center">
      {(() => {
        if (error) return <div>Error: {error.message}</div>;
        if (!isLoaded) return <div className="mx-auto">Loading...</div>;

        return (
          <div className="mx-auto w-full max-w-screen-xl px-5">
            <CoinHeader coin={coin} />
            <div className="mt-4 flex flex-col gap-4 md:flex-row">
              <LineChart coinId={coinId} color="#82ca9d" />
              <CoinMarketInfo marketData={coin.market_data} />
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default CoinDetails;
