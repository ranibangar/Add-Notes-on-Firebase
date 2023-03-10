import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom"
ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
   <App />
</Provider>
</BrowserRouter>,
document.getElementById("root")
);