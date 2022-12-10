import React from "react";
import "./App.css";
import data from "./data.js";
import Header from "./components/Header";
import Article from "./components/Article";

function App() {
  const articles = data.map((item) => {
    return <Article key={item.title} {...item} />;
  });

  return (
    <div className="container">
      <Header />
      <section className="articles">{articles}</section>
    </div>
  );
}

export default App;
