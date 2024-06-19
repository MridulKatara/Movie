import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieModal from "./components/MovieModal";
import "./App.css";

const API_KEY = "2629d552";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=popular&apikey=${API_KEY}`
      );
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  const searchMovies = async (term) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${term}&apikey=${API_KEY}`
      );
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={searchMovies} setSearchTerm={setSearchTerm} />
      <MovieList movies={movies} onMovieSelect={setSelectedMovie} />
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default App;
