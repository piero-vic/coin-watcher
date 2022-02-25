import React from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { coinId } = useParams()

  return (
    <div className="grid grow place-items-center">
      {`Coin details on ${coinId}.`}
    </div>
  )
}

export default CoinDetails;
