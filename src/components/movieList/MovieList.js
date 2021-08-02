import React from "react";
import { Link, withRouter } from "react-router-dom";

const MovieList = ({ query, movies, location }) => {
  return (
    <ul className="PageList list">
      {movies.map((movie) => (
        <li className="PageItem" key={movie.id}>
          <Link
            className="PageItemLink link"
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            <div className="PageItemWrapper">
              <img
                src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                alt={movie.title}
                className="PageImage"
              />
              <div className="PageItemWrapperOverlay">
                <p className="PageItemWrapperOverlayText">
                  Rating: {movie.vote_average}
                </p>
              </div>
              <h3 className="PageItemName">{movie.title}</h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
