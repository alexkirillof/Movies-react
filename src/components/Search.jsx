import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    const { search } = this.state;
    return (
      <div className="row">
        <div className="input-field ">
          <input
            placeholder="search"
            type="search"
            value={search}
            className="validate"
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>
        <form action="#" className="Checkers">
          <input
            name="type"
            id="check1"
            type="radio"
            className="filled-in"
            data-type="all"
            onChange={this.handleFilter}
            checked={this.state.type === "all"}
          />
          <label for="check1">All</label>

          <input
            className="filled-in"
            name="type"
            type="radio"
            id="check2"
            data-type="movie"
            onChange={this.handleFilter}
            checked={this.state.type === "movie"}
          />
          <label for="check2">Movies only</label>

          <input
            className="filled-in"
            name="type"
            id="check3"
            type="radio"
            data-type="series"
            onChange={this.handleFilter}
            checked={this.state.type === "series"}
          />
          <label for="check3">Series Only</label>
        </form>
      </div>
    );
  }
}
