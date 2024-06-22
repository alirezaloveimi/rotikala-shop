import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// react router dom
import { BrowserRouter } from "react-router-dom";

// components
import ScrollToTop from "./components/ScrollToTop.jsx";

// tailwind css
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />

    <App />
  </BrowserRouter>
);
