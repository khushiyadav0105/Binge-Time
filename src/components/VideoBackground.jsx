import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/Constants';
import { useDispatch,useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';


const VideoBackground = ({ movieId }) => {

  const dispatch=useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo); 
  // Fetch trailer video
  const getMovieVideos = async () => {
    
      const data = await fetch('https://api.themoviedb.org/3/movie/1125899/videos?language=en-US',
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
      const filterData = json.results.filter(video=>video.type==='Trailer');
      const trailer = filterData.length ? filterData[0]: json.results[0];
      console.log(trailer);
      dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideos();
    }
  }, []); 

  return( 
    <div>
      <iframe width="914" height="514" src={"https://www.youtube.com/embed/"+trailerVideo?.key}
       title="Cleaner | Official Trailer" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        ></iframe>
      
    </div>
  );
};

export default VideoBackground;
