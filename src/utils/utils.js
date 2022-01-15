export const formatValue = (number) => {
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

export const formatPriceChange = (priceChange) => {
  const formatedPriceChange = (priceChange / 100).toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const priceChangeColor = priceChange > 0 ? "text-green-400" : "text-red-400";

  return [formatedPriceChange, priceChangeColor];
};
