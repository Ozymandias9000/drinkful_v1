import React, { Component } from "react";
import "./app.styl";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
require("dotenv").config({ path: "../.env" });

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
