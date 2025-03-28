import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
  if (!movies || movies.length === 0) return <h1>Loading...</h1>;

  const mainMovie = movies?.[0] || {};
  console.log(mainMovie);

  const {original_title,overview} = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground  />
    </div>
  );
};

export default MainContainer;
