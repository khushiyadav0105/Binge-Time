import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies) || {}; 

  return (
    <div>
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies || []} /> 


      {
       /* Movie list - popular
          movie cards*n
       /* Movie list - Horror 
       /* Movie list - Now playing
         Movie list - Trending */}
    </div>
  )
}

export default SecondaryContainer;