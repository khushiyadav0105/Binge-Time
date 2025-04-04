import React, { useState } from 'react'
import SearchBar from './SearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { NETFLIX_BG } from '../utils/Constants';
import { API_OPTIONS } from '../utils/Constants';

const Search = () => {

  const [searchQuery,setSearchQuery]=useState("");

  const [searchResults,setSearchResults] = useState("");

  const fetchMovies = async (query) =>{
    if(!query) return;

    try{
      const response=await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        API_OPTIONS
      );

      const data = await response.json();
      console.log("Movie Results:", data.results);
      setSearchResults(data.results || []);

    } catch(error){
      console.log("Error",error);
    }
  }

  const handleSearch = (text) => { 
    setSearchQuery(text);
    fetchMovies(text);
  };
  return (
    <div>
      <div className="absolute inset-0 -z-10">
              <img
                src={NETFLIX_BG}
                alt="Netflix Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70"></div>
            </div>
      <SearchBar onSearch={handleSearch}/>

      {searchQuery && <p className="text-white text-center mt-4">Searching for: {searchQuery}</p>}
      
      <GptMovieSuggestions/>

      {searchResults.length > 0 ? (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 ">
    {searchResults.map((movie) => (
      <div key={movie.id} className="text-white flex flex-col items-center">
        <img 
          src={movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
            : "https://via.placeholder.com/500x750?text=No+Image"} 
          alt={movie.title} 
          className="w-40 h-72 object-cover rounded-lg"
        />
        <p className="text-white text-center mt-2 text-sm">{movie.title}</p>
      </div>
    ))}
  </div>
) : (
  searchQuery && <p className="text-white text-center mt-4">No movies found</p>
)}


      {/* SearchBar
      Movie Suggestions */}
    </div>
  )
}

export default Search;