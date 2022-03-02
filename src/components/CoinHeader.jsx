import React from "react";
import { formatValue, formatPriceChange } from "../utils/utils";

const CoinHeader = (props) => {
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
  );
};

export default CoinHeader;
