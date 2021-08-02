import React, { Component } from "react";
import MovieList from "../components/movieList/MovieList";
import Searchbar from "../components/searchbar/Searchbar";
import { fetchByQuery } from "../services/Api";
import queryString from "query-string";
import { PageStyled } from "../pagesStyles/PageStyled";

class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
    isLoading: false,
  };

  async componentDidMount() {
    const { query } = queryString.parse(this.props.location.search);
    console.log(`query`, query);
    if (query) {
      await this.getMovies(query);
      this.setState({
        query: query,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getMovies();
    }
  }

  onInputQuery = (query) => {
    this.setState({
      query: query,
      movies: [],
    });
    this.props.history.push({ search: `query=${query}` });
  };

  getMovies = async (query) => {
    this.setState({ isLoading: true });
    await fetchByQuery(query || this.state.query)
      .then((results) =>
        this.setState({
          movies: results,
        })
      )
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <>
        <PageStyled>
          <h2 className="HomePageTitle">Find a movie and enjoy it!</h2>
          <Searchbar onChange={this.onInputQuery} />
          <MovieList
            movies={this.state.movies}
            location={this.props.location}
            query={this.state.query}
          />
        </PageStyled>
      </>
    );
  }
}

export default MoviesPage;
