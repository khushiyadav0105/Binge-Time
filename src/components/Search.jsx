import React, { useState } from "react";
import SearchBar from "./SearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BG, API_OPTIONS } from "../utils/Constants";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]); // Fix: Use an array instead of a string

  const fetchMovies = async (query) => {
    if (!query) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`, // Fix: Encode query
        API_OPTIONS
      );

      const data = await response.json();
      console.log("Movie Results:", data.results);
      setSearchResults(data.results || []);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    fetchMovies(text);
  };

  return (
    <div className="min-h-screen"  style={{ backgroundImage: `url(${NETFLIX_BG})` }}>
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      <SearchBar onSearch={handleSearch} />

      {searchQuery && (
        <p className="text-white text-center mt-4">Searching for: {searchQuery}</p>
      )}

      <GptMovieSuggestions />


      {searchResults.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6 bg-black mx-20 rounded-lg relative">
          {searchResults.map((movie) => (
            <div key={movie.id} className="text-white flex flex-col items-center">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={movie.title}
                className="w-40 h-72 object-cover rounded-lg cursor-pointer "
              />
              <p className="text-white text-center mt-2 text-sm">{movie.title}</p>
            </div>
          ))}
        </div>
      ) : (
        searchQuery && <p className="text-white text-center mt-4">No movies found</p>
      )}
    </div>
  );
};

export default Search;
