import React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Article from './Components/Article';
import News from './Components/News';
import articles from "./data/articles";

const App = () => (
  <div style={{ fontFamily: "Arial, sans-serif" }}>
    <Header />
    <main style={{ padding: "20px" }}>
      <Article article={articles[0]} />
      <News articles={articles.slice(1, 8)} />
    </main>
    <Footer />
  </div>
);

export default App;
