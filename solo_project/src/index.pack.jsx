import React from "react";
import ReactDOM from "react-dom/client";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container">
    <Info />
    <div className="content">
      <About />
      <Interests />
    </div>
    <Footer />
  </div>
);
