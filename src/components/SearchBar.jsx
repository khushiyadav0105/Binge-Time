import React from 'react';
import lang from '../utils/LanguageConstants';
import { useState } from 'react';
import useLanguage from '../hooks/useLanguage';


const SearchBar = ({onSearch}) => {

  const langKey = useLanguage();

  const [searchText,setSearchText]=useState("");

  const handleSearchClick = ()=>{
    onSearch(searchText);
  }

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className='flex justify-center items-center pt-[10%]'> 
      <form className='bg-black w-[50%] flex items-center p-4 rounded-lg relative ' onSubmit={(e)=>e.preventDefault()}>
        <input 
          type="text" 
          className='p-3 w-[70%] rounded-lg bg-gray-300' 
          placeholder={lang[langKey].SearchPlaceholder}
          value={searchText}
          onChange={handleInputChange}
        />
        <button className='py-2 px-4 ml-2 bg-red-700 text-white rounded-lg' onClick={handleSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
