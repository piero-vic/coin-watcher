import React from "react";

const Coin = (props) => {
  const {
    image,
    symbol,
    current_price,
    market_cap_rank,
    price_change_percentage_24h_in_currency,
  } = props.coinData;

  return (
    <tr className="bg-gray-50">
      <td className="text-xs p-2 text-right">{market_cap_rank}</td>
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
        className={`p-2 text-right ${
          price_change_percentage_24h_in_currency > 0
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        {(price_change_percentage_24h_in_currency / 100).toLocaleString(
          "en-US",
          {
            style: "percent",
            maximumFractionDigits: 1,
          }
        )}
      </td>
    </tr>
  );
};

export default Coin;
