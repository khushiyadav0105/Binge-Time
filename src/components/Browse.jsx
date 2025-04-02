import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import Search from './Search';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  const showSearch=useSelector(store => store.search.showSearch);
  console.log(showSearch); // Check if it's true when you expect it to be

  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useNowPlayingMovies();
  
  return (
    <div>
      <Header/>
      {showSearch  ? <Search/>: <MainContainer/>}

    </div>
  )
}

export default Browse;