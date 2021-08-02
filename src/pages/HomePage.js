// import axios from "axios";
import React, { Component } from "react";
import { fetchTrendingMovies } from "../services/Api";

import MovieList from "../components/movieList/MovieList";
import { PageStyled } from "../pagesStyles/PageStyled";

class HomePage extends Component {
  /* TRENDING MOVIES */
  state = {
    movies: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    await fetchTrendingMovies().then((results) =>
      //  console.log(results)
      this.setState({ movies: results, isLoading: false })
    );
  }

  render() {
    return (
      <>
        <PageStyled>
          <div className="container">
            <h1 className="HomePageTitle">What's Popular</h1>
            <MovieList
              movies={this.state.movies}
              isLoading={this.state.isLoading}
            />
          </div>
        </PageStyled>
      </>
    );
  }
}

export default HomePage;
