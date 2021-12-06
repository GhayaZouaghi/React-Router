import React from "react";
import "../Movie.css";
const Movie = ({ location, history }) => {
  const movie = location.state;

  return (
    <div className="movieDetails">
      <h2>{movie.title}</h2>
      <h3>{movie.description}</h3>
      <img
        src={movie.poster}
        alt={movie.title}
        width=" 500px"
        margin="200px"
        className="photo"
      />
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};

export default Movie;
