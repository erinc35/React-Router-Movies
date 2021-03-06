import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class SavedList extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props)
    return <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => <Link to={`/movies/${movie.id}`}>
            <span className="saved-movie">{movie.title}</span>
          </Link>)}
        <Link exact to="/" className="home-button">
          Home
        </Link>
      </div>;
  }
}
