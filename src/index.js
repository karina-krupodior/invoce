import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Main_page } from "./main_page";
import CreateInvoice from "./create_invoice";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main_page} />
      <Route exact path="/create_invoice" component={CreateInvoice} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
