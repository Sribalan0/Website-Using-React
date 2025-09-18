import React from "react";

const Article = ({ article }) => (
  <section
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      margin: 16,
      gap: 16,
      alignItems: 'flex-start'
    }}
  >
    <img
      src={article.image}
      alt={article.title}
      style={{ width: 220, height: 'auto', borderRadius: 8 }}
    />
    <div style={{ maxWidth: 'calc(100% - 240px)' }}>
      <h2 style={{ margin: '0 0 8px 0' }}>{article.title}</h2>
      <p style={{ margin: 0, lineHeight: 1.5 }}>{article.summary}</p>
    </div>
  </section>
);

export default Article;
