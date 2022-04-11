import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { Global } from "@emotion/react";
import GlobalStyle from "./config/GlobalStyle";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { theme } from "./config/theme";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);
