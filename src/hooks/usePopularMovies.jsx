import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        API_OPTIONS
      );
      const data = await response.json();

      if (data.results) {
        dispatch(addPopularMovies(data.results));
      } else {
        console.error("API Response Error:", data);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

};

export default usePopularMovies;
