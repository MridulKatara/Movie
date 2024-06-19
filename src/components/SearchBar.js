import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file for SearchBar styles

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={onFormSubmit} className="search-bar">
      <input
        type="text"
        value={term}
        onChange={onInputChange}
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
