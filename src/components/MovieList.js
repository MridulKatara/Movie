import React from "react";
import MovieItem from "./MovieItem";
import './MovieList.css'; // Import the CSS file for MovieList styles

const MovieList = ({ movies, onMovieSelect }) => {
  const renderedList = movies.map((movie) => {
    return (
      <MovieItem
        key={movie.imdbID}
        movie={movie}
        onMovieSelect={onMovieSelect}
      />
    );
  });

  return <div className="movie-list">{renderedList}</div>;
};

export default MovieList;
