import React from "react";

const categories = [
  "Home",
  "Politics",
  "Newsletter",
  "IR Prime",
  "Events",
  "Bookstore",
];

const Navbar = () => (
  <nav
    style={{
      background: "#eee",
      padding: "12px 0",
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    }}
  >
    {categories.map((cat) => (
      <a
        key={cat}
        href="#"
        style={{
          textDecoration: "none",
          color: "#333",
          fontWeight: "500",
          padding: "6px 12px",
          borderRadius: "4px",
          transition: "background 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#ddd")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        {cat}
      </a>
    ))}
  </nav>
);

export default Navbar;
