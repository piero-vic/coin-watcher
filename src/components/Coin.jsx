import React from "react";

const Coin = (props) => {
  const { image, symbol, current_price, market_cap_rank } = props.coinData;

  return (
    <tr className="bg-gray-50">
      <td className="p-2 text-left">{market_cap_rank}</td>
      <td className="p-2 text-right flex gap-2">
        <img className="h-6 w-6" src={image} alt="" />
        <span>{symbol.toUpperCase()}</span>
      </td>
      <td className="p-2 text-right">
        {`$${current_price.toLocaleString("en-US")}`}
      </td>
    </tr>
  );
};

export default Coin;
