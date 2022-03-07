import React from "react";
import TimeFrameSelector from "./TimeFrameSelector";
import { formatValue, formatPriceChange } from "../../utils/utils";

const CoinHeader = (props) => {
  const { period, setPeriod } = props;

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
      <TimeFrameSelector period={period} setPeriod={setPeriod} />
    </div>
  );
};

export default CoinHeader;
