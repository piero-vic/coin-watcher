import React from "react";
import { formatValue } from "../utils/utils";

const CoinHeader = (props) => {
  const { name, image, symbol, market_data } = props.coin

  return (
    <div>
      <p className="flex items-baseline gap-2">
        <img className="h-6 w-6" src={image.small} alt="" />
        <span className="text-xl">{name}</span>
        <span className="opacity-60">{`${symbol.toUpperCase()}`}</span>
      </p>
      <p className="flex items-baseline gap-2 text-2xl">
        <span>{formatValue(market_data.current_price.usd)}</span>
        <span className="text-base">
          {market_data.price_change_percentage_24h}
        </span>
      </p>
    </div>
  )
}

export default CoinHeader;
