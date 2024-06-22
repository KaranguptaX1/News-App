import React from 'react';

const Article = ({ article }) => {
  return (
    <div className="p-4 border border-gray-300 rounded bg-white">
      <h2 className="text-xl font-bold">{article.title}</h2>
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover my-2 rounded" />
      )}
      <p>{article.description}</p>
      <a href={article.url} className="text-blue-500">Read more</a>
    </div>
  );
};

export default Article;
