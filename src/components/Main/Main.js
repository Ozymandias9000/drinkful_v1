import React, { Component } from "react";
import "./Main.styl";
import BeerList from "./BeerList/BeerList";
import Search from "./Search/Search";
import Loading from "../Loading/Loading";

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

  async fetchBeers(e) {
    e.preventDefault();
    this.setState({ loading: true });
    fetch(
      `https://api.punkapi.com/v2/beers?beer_name=${
        this.state.searchInput
      }&per_page=6`
    )
      .then(res => res.json())
      .then(data => this.setState({ beers: data, loading: false }))
      // .then(console.log(this.state.beers))
      .catch(error => {
        console.log("Error", error);
        this.setState({
          error: error.errorMessage,
          loading: false
        });
      });
    // console.log(this.state);
  }

  updateSearchInput(e) {
    this.setState({ searchInput: e.target.value });
  }

  render() {
    const { loading, beers } = this.state;
    if (loading) {
      return (
        <div className="loading--container">
          <Loading />
        </div>
      );
    }

    return (
      <main className="main--container">
        <Search
          updateSearchInput={this.updateSearchInput.bind(this)}
          fetchBeers={this.fetchBeers.bind(this)}
        />
        <BeerList beers={beers} />
      </main>
    );
  }
}

export default Main;
