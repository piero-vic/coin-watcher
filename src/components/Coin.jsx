import React from "react";
import { formatValue, formatPriceChange } from "../utils/utils";

const Coin = (props) => {
  const {
    coinData: {
      image,
      symbol,
      current_price,
      market_cap_rank,
      price_change_percentage_24h_in_currency,
      price_change_percentage_7d_in_currency,
      market_cap,
    },
  } = props;

  const [priceChange24, priceChangeColor24] = formatPriceChange(
    price_change_percentage_24h_in_currency
  );

  const [priceChange7, priceChangeColor7] = formatPriceChange(
    price_change_percentage_7d_in_currency
  );

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="hidden left-0 p-2 text-xs text-right">
        {market_cap_rank}
      </div>
      <div className="flex p-2 text-right left-9 w-28 gap-2">
        <img className="w-6 h-6" src={image} alt="" />
        <span>{symbol.toUpperCase()}</span>
      </div>
      <div className="p-2 text-right">{formatValue(current_price)}</div>
      <div className={`hidden p-2 text-right ${priceChangeColor24}`}>
        {priceChange24}
      </div>
      <div className={`hidden p-2 div-right ${priceChangeColor7}`}>
        {priceChange7}
      </div>
      <div className="hidden p-2 text-right">{formatValue(market_cap)}</div>
    </div>
  );
};

export default Coin;
