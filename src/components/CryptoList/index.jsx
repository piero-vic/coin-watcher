import React, { useState } from "react";
import useCryptoData from "../../hooks/useCryptoData";
import Coin from "./Coin";
import Pagination from "./Pagination";
import { CoinList } from "../../utils/api";

const CryptoList = () => {
  const { data, isLoaded, error } = useCryptoData(CoinList("usd"));
  const [page, setPage] = useState(1);

  return (
    <div className="grid place-items-center">
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
              {data
                .slice((page - 1) * 10, (page - 1) * 10 + 10)
                .map((coinData) => (
                  <Coin coinData={coinData} key={coinData.id} />
                ))}
            </div>
            {/* FOOTER */}
            <Pagination page={page} setPage={setPage} />
          </div>
        );
      })()}
    </div>
  );
};

export default CryptoList;
