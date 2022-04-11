import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { Global } from "@emotion/react";
import GlobalStyle from "./config/GlobalStyle";
import { store } from "./redux/store";
import { Provider } from "react-redux";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Global styles={GlobalStyle} />
    <CssBaseline />
    <App />
  </Provider>
);
