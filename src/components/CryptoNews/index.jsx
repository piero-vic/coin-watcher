import React from "react";
import ArticleCard from "./ArticleCard";
import useCryptoData from "../../hooks/useCryptoData";
import { News } from "../../utils/api";

const CryptoNews = () => {
  const { data, isLoaded, error } = useCryptoData(News());

  if (error) return <div>Error: {error.message}</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      {data.data.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </>
  );
};

export default CryptoNews;
