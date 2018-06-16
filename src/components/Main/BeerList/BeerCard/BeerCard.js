import React, { Component } from "react";
import "./BeerCard.styl";

class BeerCard extends Component {
  render() {
    let { name, tagline, image_url } = this.props.beer;
    return (
      <div className="beer-card" tabindex="0">
        <img
          src={image_url}
          alt="beer"
          style={{
            height: 200 + "px",
            width: "auto",
            float: "left",
            paddingRight: 20 + "px"
          }}
        />
        <h5>{name}</h5>
        <p>{tagline}</p>
      </div>
    );
  }
}

export default BeerCard;
