import React from 'react';
import lang from '../utils/LanguageConstants';

import useLanguage from '../hooks/useLanguage';

const SearchBar = () => {

  const langKey = useLanguage();

  return (
    <div className='flex justify-center items-center pt-[10%]'> 
      <form className='bg-black w-[50%] flex items-center p-4 rounded-lg'>
        <input 
          type="text" 
          className='p-3 w-[70%] rounded-lg bg-gray-300' 
          placeholder={lang[langKey].SearchPlaceholder}
        />
        <button className='py-2 px-4 ml-2 bg-red-700 text-white rounded-lg'>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
