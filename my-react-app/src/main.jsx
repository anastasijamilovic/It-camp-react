import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import Class16 from "./components/16.cas/index.jsx";
import Class20 from "./components/20.cas/index.jsx";
import ProductCard from "./components/20.cas/ProductCard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Class16></Class16> */}
    <Class20></Class20>
  </React.StrictMode>
);
