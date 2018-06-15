import React, { Component } from "react";
import "./Main.styl";
import BeerList from "./BeerList/BeerList";
import Search from "./Search/Search";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      loading: true,
      beers: [],
      error: null
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  async fetchBeers() {
    this.setState({ loading: true });

    // change to REACT_APP_API_BASE before build
    fetch(
      `https://api.punkapi.com/v2/beers?beer_name=${
        this.state.searchInput
      }&per_page=6`
    )
      .then(res => res.json())
      .then(data => this.setState({ beers: data, loading: false }))
      .catch(error => {
        console.log("Error", error);
        this.setState({
          error: error.errorMessage,
          loading: false
        });
      });
  }

  updateSearchInput(e) {
    this.setState({ searchInput: e.target.value });
  }

  render() {
    const { loading, beers } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="main--container">
        <Search
          updateSearchInput={this.updateSearchInput.bind(this)}
          fetchBeers={this.fetchBeers.bind(this)}
        />
        <BeerList beers={beers} />
      </div>
    );
  }
}

export default Main;
