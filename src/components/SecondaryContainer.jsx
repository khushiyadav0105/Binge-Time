import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies) || {}; 

  return (
    <div className='bg-black'>
      <div className='relative pl-12 -mt-45 z-20 '>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies || []} /> 
        <MovieList title={"Popular"} movies={movies?.PopularMovies || []} /> 
        <MovieList title={"Top Rated"} movies={movies?.TopRatedMovies || []} /> 
        <MovieList title={"Upcoming Movies"} movies={movies?.UpcomingMovies || []} /> 
       

        {
        /* Movie list - popular
            movie cards*n
        /* Movie list - Horror 
        /* Movie list - Now playing
          Movie list - Trending */}
      </div>
    </div>
  )
}

export default SecondaryContainer;