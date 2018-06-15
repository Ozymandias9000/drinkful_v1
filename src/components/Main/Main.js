import React, { Component } from "react";
import "./Main.styl";
import BeerList from "./BeerList/BeerList";
import Search from "./Search/Search";

class Main extends Component {
  render() {
    return (
      <div className="main--container">
        <Search />
        <BeerList />
      </div>
    );
  }
}

export default Main;
