import React from "react";

const ArticleCard = (props) => {
  const { article } = props;

  const published_at = new Date(article.published_at).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-11/12 max-w-screen-sm rounded-2xl bg-white p-4 drop-shadow-xl transition-transform hover:scale-[1.02] dark:bg-zinc-900">
      <a href={article.url}>
        <h2 className="mb-2">{article.title}</h2>
        <p className="text-sm">
          <span>{article.author.name}</span>
          <span className="px-3">·</span>
          <span className="font-light text-slate-400 dark:text-slate-500">
            {published_at}
          </span>
        </p>
      </a>
    </div>
  );
};

export default ArticleCard;
