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
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Search;
