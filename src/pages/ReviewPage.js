import React, { Component } from "react";
import { fetchMovieReview } from "../services/Api";

class ReviewPage extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const id = this.props.match.params.id;
    await fetchMovieReview(id)
      .then((results) => this.setState({ reviews: results }))
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { reviews } = this.state;
    console.log(this.state.reviews);
    return (
      <>
        {reviews.length ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h2>No Review to this movie</h2>
        )}
      </>
    );
  }
}

export default ReviewPage;
