import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: [],
        trailerVideo: [], 
    },
    reducers: {
      addNowPlayingMovies: (state, action) => {
        state.nowPlayingMovies = action.payload || []; 
      },
      
      addPopularMovies: (state, action) => {
        state.PopularMovies = action.payload || []; 
      },
      
      addTopRatedMovies: (state, action) => {
        state.TopRatedMovies = action.payload || []; 
      },
      
      addUpcomingMovies: (state, action) => {
        state.UpcomingMovies = action.payload || []; 
      },
      
      addTrailerVideo:(state,action)=>{
        state.trailerVideo=action.payload;
      }
      }

      
});

export const {addNowPlayingMovies,addTrailerVideo, addPopularMovies,addUpcomingMovies, addTopRatedMovies} =movieSlice.actions;
export default movieSlice.reducer;
