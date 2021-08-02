import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    query: "",
  };

  onHandleInputChange = (event) => {
    this.setState({ query: event.currentTarget.value });
  };

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onChange(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.onHandleSubmit}>
            <input
              className="searchInput"
              type="text"
              autoComplete="off"
              // autoFocus
              placeholder="Enter movie name"
              value={this.state.query}
              onChange={this.onHandleInputChange}
            />
            <button type="submit" className="button">
              Search
            </button>
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
