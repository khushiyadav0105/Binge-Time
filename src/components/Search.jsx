import React from 'react'
import SearchBar from './SearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { NETFLIX_BG } from '../utils/Constants';

const Search = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
              <img
                src={NETFLIX_BG}
                alt="Netflix Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
      <SearchBar/>
      <GptMovieSuggestions/>

      {/* SearchBar
      Movie Suggestions */}
    </div>
  )
}

export default Search;