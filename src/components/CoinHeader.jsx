import React from "react";
import { formatValue, formatPriceChange } from "../utils/utils";

const CoinHeader = (props) => {
  const { setPeriod } = props;

  const {
    name,
    image,
    symbol,
    market_data: { current_price, price_change_percentage_24h },
  } = props.coin;

  const [priceChange, priceChangeColor] = formatPriceChange(
    price_change_percentage_24h
  );

  return (
    <div className="ml-2 flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
      <div>
        <p className="flex items-baseline gap-2">
          <img className="h-6 w-6" src={image.small} alt="" />
          <span className="text-xl">{name}</span>
          <span className="opacity-60">{`${symbol.toUpperCase()}`}</span>
        </p>
        <p className="flex items-baseline gap-2 text-2xl">
          <span>{formatValue(current_price.usd)}</span>
          <span className={`text-base ${priceChangeColor}`}>{priceChange}</span>
        </p>
      </div>
      <div className="flex gap-1 rounded-2xl border border-white bg-white p-[2px] text-sm dark:border-zinc-900 dark:bg-zinc-900">
        <button className="rounded-2xl py-1 px-2" onClick={() => setPeriod(1)}>1D</button>
        <button className="rounded-2xl py-1 px-2" onClick={() => setPeriod(7)}>7D</button>
        <button className="rounded-2xl py-1 px-2" onClick={() => setPeriod(30)}>1M</button>
        <button className="rounded-2xl py-1 px-2" onClick={() => setPeriod(90)}>3M</button>
        <button className="rounded-2xl py-1 px-2" onClick={() => setPeriod(365)}>1Y</button>
      </div>
    </div>
  );
};

export default CoinHeader;
