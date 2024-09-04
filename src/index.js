import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// TypeScript expects you to be explicit about the type of the element you’re accessing.
const rootElement = document.getElementById("root");

// Ensure the rootElement exists and is not null, using a type guard
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element. Please check your HTML file.");
}
