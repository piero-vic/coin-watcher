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
    <tr className="bg-gray-50">
      <td className="sticky left-0 p-2 text-xs text-right bg-gray-50">
        {market_cap_rank}
      </td>
      <td className="sticky flex p-2 text-right left-9 w-28 gap-2 bg-gray-50">
        <img className="w-6 h-6" src={image} alt="" />
        <span>{symbol.toUpperCase()}</span>
      </td>
      <td className="p-2 text-right">{formatValue(current_price)}</td>
      <td className={`p-2 text-right ${priceChangeColor24}`}>
        {priceChange24}
      </td>
      <td className={`p-2 text-right ${priceChangeColor7}`}>{priceChange7}</td>
      <td className="p-2 text-right">{formatValue(market_cap)}</td>
    </tr>
  );
};

export default Coin;
