import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConcursoProvider } from "./context/ConcursoContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConcursoProvider>
      <App />
    </ConcursoProvider>
  </React.StrictMode>
);