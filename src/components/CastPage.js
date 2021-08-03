import React, { Component } from "react";
import { fetchMovieCast } from "../services/Api";
import defaultImg from "../images/unknown_person.jpg";

class CastPage extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const id = this.props.match.params.id;
    await fetchMovieCast(id)
      .then((results) => this.setState({ cast: results.cast }))
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { cast } = this.state;
    // console.log(this.state.cast);
    return (
      <>
        {cast ? (
          <ul className="CastList">
            {cast.map((castCaracter) => (
              <li key={castCaracter.id} className="CastListItem">
                <img
                  className="castImage"
                  src={
                    castCaracter?.profile_path
                      ? `https://image.tmdb.org/t/p/w300${castCaracter.profile_path}`
                      : defaultImg
                  }
                  alt={castCaracter.name}
                  width="200"
                  height="200"
                />
                <h2 className="castTitle">{castCaracter.name}</h2>
              </li>
            ))}
          </ul>
        ) : (
          <h2>Cast unknown</h2>
        )}
      </>
    );
  }
}

export default CastPage;
