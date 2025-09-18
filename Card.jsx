import React from "react";

const NewsCard = ({ article }) => (
  <div
    style={{
      border: "1px solid #ccc",
      width: "300px",
      borderRadius: 8,
      overflow: "hidden",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      transition: "transform 0.2s",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <img
      src={article.image}
      alt={article.title}
      style={{ width: "100%", height: 160, objectFit: "cover" }}
    />
    <div style={{ padding: 8 }}>
      <h4 style={{ margin: "8px 0" }}>{article.title}</h4>
      <p style={{ margin: "0 0 8px 0", lineHeight: 1.4 }}>{article.summary}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ color: "#007BFF", textDecoration: "none" }}>
        Read More
      </a>
    </div>
  </div>
);

export default NewsCard;
