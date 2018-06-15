import React, { Component } from "react";
import "./BeerList.styl";
import BeerCard from "./BeerCard/BeerCard";

class BeerList extends Component {
  render() {
    return (
      <div className="beer-list--container">
        {/* <p>{this.props.beers[0].name}</p> */}
        <BeerCard />
        <BeerCard />
        <BeerCard />
        <BeerCard />
      </div>
    );
  }
}

export default BeerList;
