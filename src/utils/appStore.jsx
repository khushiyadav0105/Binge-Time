import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesReducer from './movieSlice';
import searchReducer from "./searchSlice";
import configReducer from './configSlice';


const appStore = configureStore({
    reducer: {
        user : userReducer,
        movies : moviesReducer,
        search: searchReducer,
        config: configReducer,  
    },
})
export default appStore;