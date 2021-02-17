import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import App from "./App";
import { RecipesListProvider } from "./RecipesContext";

ReactDOM.render(
  <RecipesListProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RecipesListProvider>,
  document.getElementById("root")
);
