import React from "react";
import './MovieItem.css'; // Import the CSS file for MovieItem styles

const MovieItem = ({ movie, onMovieSelect }) => {
  return (
    <div className="movie-item" onClick={() => onMovieSelect(movie)}>
      <img src={movie.Poster} alt={movie.Title} />
      <h4>
        {movie.Title} ({movie.Year})
      </h4>
    </div>
  );
};

export default MovieItem;
