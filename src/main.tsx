import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app";
import { worker } from "./mocks/browser";

import "./design-system/index.css";

worker.start();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
