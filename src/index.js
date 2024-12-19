import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);