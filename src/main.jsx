import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  //inserção do app no html por meio do Javascript
  <StrictMode>
    <App />
  </StrictMode>
);
