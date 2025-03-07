import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalContextProvider } from "./context/GlobalContext";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <ToastContainer limit={3} position="top-left" />
    <App />
  </GlobalContextProvider>
);
