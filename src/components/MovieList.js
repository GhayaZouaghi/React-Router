import React from "react";
import "./MovieList.css";

import MovieCard from "./MovieCard";

const MovieList = ({ movies, searchValue, star }) => {
  return (
    <div>
      <div className="list">
        {movies
          .filter(
            (movie) =>
              movie.title.toUpperCase().includes(searchValue.toUpperCase()) &&
              movie.Rating >= star
          )
          .map((movie, i) => (
            <MovieCard movie={movie} key={i} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
