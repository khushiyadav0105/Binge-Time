import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollContainer = useRef(null);

  const handleMovieClick = () => {
    
  }


  return (
    <div className="px-6">
      <h1 className="text-2xl py-4 text-white">{title}</h1>

      <div
        ref={scrollContainer}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth "
      >
        <div className="flex gap-4 cursor-pointer" onClick={handleMovieClick}>
        
        {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
