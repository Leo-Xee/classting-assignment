import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import App from "./App";

import GlobalStyle from "./styles/GlobalStyle";

const element = document.getElementById("root");
if (!element) throw Error("Root container missing in index.html");

const root = ReactDOM.createRoot(element);
root.render(
  <>
    <Global styles={GlobalStyle} />
    <App />
  </>,
);
