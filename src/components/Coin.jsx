import React from "react";

const Coin = (props) => {
  const {
    coinData: {
      image,
      symbol,
      current_price,
      market_cap_rank,
      price_change_percentage_24h_in_currency,
    },
    last,
  } = props;

  const priceChangeColor = (priceChange) =>
    priceChange > 0 ? "text-green-400" : "text-red-400";

  return (
    <tr className="bg-gray-50">
      <td className={`text-xs p-2 text-right ${last && "rounded-bl-lg"}`}>
        {market_cap_rank}
      </td>
      <td className="flex p-2 text-right gap-2">
        <img className="w-6 h-6" src={image} alt="" />
        <span>{symbol.toUpperCase()}</span>
      </td>
      <td className="p-2 text-right">
        {current_price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 18,
        })}
      </td>
      <td
        className={`p-2 text-right ${priceChangeColor(
          price_change_percentage_24h_in_currency
        )} ${last && "rounded-br-lg"}`}
      >
        {(price_change_percentage_24h_in_currency / 100).toLocaleString(
          "en-US",
          {
            style: "percent",
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          }
        )}
      </td>
    </tr>
  );
};

export default Coin;
