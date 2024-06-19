import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import './MovieModal.css'; 

const API_KEY = "2629d552";

const MovieModal = ({ movie, onClose }) => {
  const [details, setDetails] = useState({});
  const [trailerUrl, setTrailerUrl] = useState('');
  const [hasError, setHasError] = useState(false);

  const fetchMovieDetails = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`
      );
      setDetails(response.data);
      const trailerResponse = await axios.get(`https://api.example.com/trailer?movieId=${movie.imdbID}`);
      setTrailerUrl(trailerResponse.data.trailerUrl);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setHasError(true);
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
        <div className="modal-body">
          <div className="modal-left">
            {trailerUrl && !hasError ? (
              <iframe
                width="100%"
                height="315"
                src={trailerUrl}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              />
            )}
          </div>
          <div className="modal-right">
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
      </div>
    </div>
  );
};

export default MovieModal;
