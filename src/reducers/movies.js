import {
    ALL_PUBLIC_MOVIE,
    RETRIEVE_PUBLIC_MOVIES
  } from "../actions/types";
  
  const initialState = [];
  
  function movieReducer(movies = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case RETRIEVE_PUBLIC_MOVIES:
            return payload;
        
        case ALL_PUBLIC_MOVIE:
            return payload;

        default:
            return movies;
    }
  };
  
  export default movieReducer;