import React from "react";

const MovieItem = ({ movie, onMovieSelect }) => {
  return (
    <div className="movie-item" onClick={() => onMovieSelect(movie)}>
      <h4>
        {movie.Title} ({movie.Year})
      </h4>
    </div>
  );
};

export default MovieItem;
  