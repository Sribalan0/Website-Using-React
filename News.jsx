import React from "react";
import Card from './Card';

const NewsGrid = ({ articles }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      padding: 16,
    }}
  >
    {articles.map((article) => (
      <Card key={article.id} article={article} />
    ))}
  </div>
);

export default NewsGrid;
