import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name: "movie",
    initialState: {
        NowPlayingMovies: []  
    },
    reducers : {
        addNowPlayingMovies:(state,action)=>{
            state.NowPlayingMovies=action.payload;
        }
    }
});

export const {addNowPlayingMovies} =movieSlice.actions;
export default movieSlice.reducer;
