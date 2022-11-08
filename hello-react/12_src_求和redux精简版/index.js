// 引入react核心库
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom/client";
import "./index.css";
// 引入App组件
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

store.subscribe(() => {
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
