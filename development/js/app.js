import React, { Component } from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer";
import Weather from "./Weather";
import Header from "./Header";
import Foother from "./Footer";
import Currency from "./Crrency";
import ToDo from "./ToDo";

const App = () => (
  <>
    <Header />
    <div className={"content_box"}>
      <Currency />
      <ToDo />
      <div className={"content"}>
        <Timer />
        <Weather />
      </div>
    </div>
    <Foother />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
