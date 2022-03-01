import React from "react";
import useCryptoData from "../hooks/useCryptoData";
import { HistoricalData } from "../utils/api"
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

const LineChart = (props) => {
  const { coinId, color } = props;

  const { data, isLoaded, error } = useCryptoData(HistoricalData(coinId, 365, "weekly", "usd"))

  return (
    <div className="md:w-8/12 h-40 md:h-auto max-h-full rounded-2xl bg-white p-4 drop-shadow-xl dark:bg-zinc-900">
      {(() => {
        if (error) return <div>Error: {error.message}</div>;
        if (!isLoaded) return <div>Loading...</div>;
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.prices.map((item) => ({ date: item[0], price: item[1] }))}>
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={color} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area dataKey="price" stroke={color} fill="url(#color)" />
            </AreaChart> 
          </ResponsiveContainer>
        )
      })()}
    </div>
  )
};

export default LineChart;
