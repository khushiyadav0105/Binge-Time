import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const data = await response.json();

      if (data.results) {
        dispatch(addNowPlayingMovies(data.results));
      } else {
        console.error("API Response Error:", data);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, [dispatch]);

  return null; // ✅ This ensures React does not expect a return value
};

export default useNowPlayingMovies;
