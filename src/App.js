import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";
import "./App.css";

const API_KEY = "2629d552"; 

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=popular&apikey=${API_KEY}`);
      setMovies(response.data.Search);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      setMovies(response.data.Search);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} onMovieSelect={handleSelectMovie} />
      {isModalOpen && <MovieModal movie={selectedMovie} onClose={closeModal} />}
    </div>
  );
};

export default App;
