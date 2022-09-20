import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./types.ts";
import "./generics";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
