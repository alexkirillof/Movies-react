import React, { Component } from "react";
import Movies from "../Movies";
import Preloader from "../Preloader";
import Search from "../Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends Component {
  state = {
    loading: true,
    movies: [],
  };

  searchMovies = (str, type = "all ") => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main
        className="content brown lighten-5
    "
      >
        <Search searchMovies={this.searchMovies} />
        {this.state.movies.length ? (
          loading ? (
            <Preloader />
          ) : (
            <Movies movies={movies}></Movies>
          )
        ) : (
          <div>Введите в поисковой строке название фильма</div>
        )}
      </main>
    );
  }
}
