import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

const API_KEY = "2629d552";

const MovieModal = ({ movie, onClose }) => {
  const [details, setDetails] = useState({});

  const fetchMovieDetails = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
      );
      setDetails(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }, [movie.imdbID]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{details.Title}</h2>
        <p>{details.Plot}</p>
        <p>
          <strong>Genre:</strong> {details.Genre}
        </p>
        <p>
          <strong>Rating:</strong> {details.imdbRating}
        </p>
      </div>
    </div>
  );
};

export default MovieModal;
