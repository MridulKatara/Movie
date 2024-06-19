import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import './App.css'; 

const API_KEY = '2629d552';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=popular&apikey=${API_KEY}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const onSearch = async (term) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${term}&apikey=${API_KEY}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const onMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const onCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app">
      <Navbar />
      <SearchBar onSearch={onSearch} />
      <MovieList movies={movies} onMovieSelect={onMovieSelect} />
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={onCloseModal} />}
    </div>
  );
};

export default App;
