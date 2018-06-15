import React, { Component } from "react";
import "./app.css";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

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
