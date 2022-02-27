import React from "react";
import useCryptoData from "../hooks/useCryptoData";
import { HistoricalData } from "../utils/api"
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

const LineChart = (props) => {
  const { coinId } = props;

  const { data, isLoaded, error } = useCryptoData(HistoricalData(coinId, 365, "weekly", "usd"))

  return (
    <div className="md:w-8/12 h-40 md:h-auto rounded-2xl bg-white p-4 drop-shadow-xl dark:bg-zinc-900">
      {(() => {
        if (error) return <div>Error: {error.message}</div>;
        if (!isLoaded) return <div>Loading...</div>;
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.prices.map((item) => ({ date: item[0], price: item[1] }))}>
              <Area dataKey="price" />
            </AreaChart> 
          </ResponsiveContainer>
        )
      })()}
    </div>
  )
};

export default LineChart;
