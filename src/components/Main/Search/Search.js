import React, { Component } from "react";
import "./Search.styl";

class Search extends Component {
  render() {
    return (
      <div className="search--box">
        <form>
          <input
            type="text"
            placeholder="Search for beer!"
            id="search--input"
            name="search--input"
            onChange={this.props.updateSearchInput}
          />
          <input type="submit" onSubmit={this.props.fetchBeers} />
        </form>
      </div>
    );
  }
}

export default Search;
