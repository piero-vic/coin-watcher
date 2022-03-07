import React from "react";
import useCryptoData from "../../hooks/useCryptoData";
import { HistoricalData } from "../../utils/api";
import { Area, AreaChart, ResponsiveContainer, YAxis } from "recharts";

const LineChart = (props) => {
  const { coinId, color, period } = props;

  const { data, isLoaded, error } = useCryptoData(HistoricalData(coinId, period, "usd"));

  return (
    <div className="h-40 rounded-2xl bg-white p-4 drop-shadow-xl dark:bg-zinc-900 md:h-auto md:w-8/12">
      {(() => {
        if (error) return <div>Error: {error.message}</div>;
        if (!isLoaded) return <div>Loading...</div>;
        return (
          <ResponsiveContainer>
            <AreaChart
              data={data.prices.map((item) => ({
                date: item[0],
                price: item[1],
              }))}
            >
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <YAxis dataKey="price" hide domain={["dataMin", "dataMax"]} />
              <Area dataKey="price" stroke={color} fill="url(#color)" />
            </AreaChart>
          </ResponsiveContainer>
        );
      })()}
    </div>
  );
};

export default LineChart;
