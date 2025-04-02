import React from 'react';
import lang from '../utils/LanguageConstants';

const SearchBar = () => {
  return (
    <div className='flex justify-center items-center pt-[10%]'> 
      <form className='bg-black w-[50%] flex items-center p-4 rounded-lg'>
        <input 
          type="text" 
          className='p-3 w-[70%] rounded-lg bg-gray-300' 
          placeholder={lang.hindi.SearchPlaceholder}
        />
        <button className='py-2 px-4 ml-2 bg-red-700 text-white rounded-lg'>
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
