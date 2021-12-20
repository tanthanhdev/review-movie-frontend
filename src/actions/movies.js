import {
    ALL_PUBLIC_MOVIE,
    RETRIEVE_PUBLIC_MOVIES
  } from "./types";
  
  import PublicMovieService from "../services/movie.service";
  
  export const publicRetrieveMovies = (slug) => async (dispatch) => {
    try {
      const res = await PublicMovieService.get(slug);
  
      dispatch({
        type: RETRIEVE_PUBLIC_MOVIES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const publicAllMovies = () => async (dispatch) => {
    try {
      const res = await PublicMovieService.getAll();
  
      dispatch({
        type: ALL_PUBLIC_MOVIE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };