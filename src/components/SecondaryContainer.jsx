import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies) || {}; 

  if (!movies || Object.keys(movies).length === 0) return null; 

  return (
    <div className="bg-black">
      <div className="relative -mt-32 z-20 flex flex-col gap-8 px-6">
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies || []} />
        <MovieList title="Popular" movies={movies?.PopularMovies || []} />
        <MovieList title="Top Rated" movies={movies?.TopRatedMovies || []} />
        <MovieList title="Upcoming Movies" movies={movies?.UpcomingMovies || []} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
