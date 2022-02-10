import React from "react";
import ArticleCard from "./ArticleCard";
import useCryptoNews from "../hooks/useCryptoNews";

const CryptoNews = () => {
  const { data, isLoaded, error } = useCryptoNews();

  return (
    <div className="grid place-items-center gap-4 grow">
      {(() => {
        if (error) return <div>Error: {error.message}</div>;
        if (!isLoaded) return <div>Loading...</div>;
        return (
          <>
            {data.map((article) => (
              <ArticleCard article={article} key={article.id} />
            ))}
          </>
        );
      })()}
    </div>
  );
};

export default CryptoNews;
