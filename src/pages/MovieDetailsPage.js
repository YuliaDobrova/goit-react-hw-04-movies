import React, { Component, lazy } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { MovieDetailsStyled } from '../pagesStyles/MovieDetailsStyled';
import { fetchMovieDetails } from '../services/Api';
// import Cast from "../components/CastPage";
// import Review from "../components/ReviewPage";

const Cast = lazy(() => import('../pages/CastPage'));
const Review = lazy(() => import('../pages/ReviewPage'));

class MovieDetailsPage extends Component {
  state = {
    moviesDetails: {},
    isLoading: false,
    from: '',
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const movieId = this.props.match.params.id;
    await fetchMovieDetails(movieId)
      .then(res =>
        this.setState({
          moviesDetails: res,
          from: this.props.location.state?.from,
        }),
      )
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  handleGoBack = () => this.props.history.push(this.state.from);

  render() {
    const { title, release_date, poster_path, vote_average, genres } = this.state.moviesDetails;

    return (
      <>
        <button type="button" className="button" onClick={this.handleGoBack}>
          Go Back
        </button>
        <MovieDetailsStyled>
          <div className="MovieDetailsThumb">
            {poster_path && (
              <img
                src={'https://image.tmdb.org/t/p/w300' + poster_path}
                alt={title}
                className="MovieDetailsImage"
              />
            )}
            <div className="MovieDetailsWrapper">
              <h3 className="MovieDetailsTitle">{title}</h3>
              <p className="MovieDetailsText">Release date: {release_date}</p>
              <p className="MovieDetailsText">Vote average: {vote_average}</p>
              <p className="MovieDetailsText">Genres: </p>
              <ul className="MovieDetailsList">
                {genres?.map(genre => (
                  <li className="MovieDetailsListItem" key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>{' '}
              <div className="MovieDetailsButtonWrapper">
                <Link to={this.props.match.url + '/cast'} className="MovieDetailsLink">
                  Cast
                </Link>
                <Link to={this.props.match.url + '/review'} className="MovieDetailsLink">
                  Review
                </Link>
              </div>
            </div>
          </div>
        </MovieDetailsStyled>

        <div>
          <Switch>
            <Route path="/movies/:id/cast" exact component={Cast} />
            <Route path="/movies/:id/review" exact component={Review} />
          </Switch>
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
