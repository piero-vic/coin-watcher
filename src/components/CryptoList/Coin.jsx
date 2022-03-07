import React from "react";
import { NavLink } from "react-router-dom"
import { formatValue, formatPriceChange } from "../../utils/utils";

const Coin = (props) => {
  const {
    coinData: {
      id,
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
    <NavLink to={`/${id}`}>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        <div className="hidden p-2 text-right text-xs sm:block">
          {market_cap_rank}
        </div>
        <div className="flex w-28 gap-2 p-2 text-right">
          <img className="h-6 w-6" src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
        <div className="p-2 text-right">{formatValue(current_price)}</div>
        <div className={`hidden p-2 text-right sm:block ${priceChangeColor24}`}>
          {priceChange24}
        </div>
        <div className={`hidden p-2 text-right md:block ${priceChangeColor7}`}>
          {priceChange7}
        </div>
        <div className="hidden p-2 text-right lg:block">
          {formatValue(market_cap)}
        </div>
      </div>
    </NavLink>
  );
};

export default Coin;
