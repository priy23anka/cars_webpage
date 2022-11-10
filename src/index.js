import React from "react";
import ReactDOM from "react-dom";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <StyleProvider>
    <ThemePicker variant="light">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemePicker>
  </StyleProvider>,
  document.getElementById("root")
);
