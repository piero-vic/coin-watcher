import React from "react";

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

  const formatValue = (number) => {
    const options = {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    };

    if (number === 1 || number % 1 !== 0) {
      options.minimumFractionDigits = 2;
      options.maximumFractionDigits = 18;
    }

    return number.toLocaleString("en-US", options);
  };

  const priceChangeColor = (priceChange) =>
    priceChange > 0 ? "text-green-400" : "text-red-400";

  const formatPriceChange = (priceChange) =>
    (priceChange / 100).toLocaleString("en-US", {
      style: "percent",
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

  return (
    <tr className="bg-gray-50">
      <td className="p-2 text-xs text-right">{market_cap_rank}</td>
      <td className="flex p-2 text-right w-28 gap-2">
        <img className="w-6 h-6" src={image} alt="" />
        <span>{symbol.toUpperCase()}</span>
      </td>
      <td className="p-2 text-right">{formatValue(current_price)}</td>
      <td
        className={`p-2 text-right ${priceChangeColor(
          price_change_percentage_24h_in_currency
        )}`}
      >
        {formatPriceChange(price_change_percentage_24h_in_currency)}
      </td>
      <td
        className={`p-2 text-right ${priceChangeColor(
          price_change_percentage_7d_in_currency
        )}`}
      >
        {formatPriceChange(price_change_percentage_7d_in_currency)}
      </td>
      <td className="p-2 text-right">{formatValue(market_cap)}</td>
    </tr>
  );
};

export default Coin;
