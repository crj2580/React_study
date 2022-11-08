// 引入react核心库
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom/client";
import "./index.css";
// 引入App组件
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

/* 
// 检测redux中状态改变，如redux的状态发生了改变，那么重新渲染App组件
store.subscribe(() => {
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
 */
