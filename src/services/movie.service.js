import { AxiosWithoutInterceptor, Axios } from './Axios';
import { createStore, createEffect, createEvent } from 'effector';
// import { TParamLogin, TParamSignUp, TToken } from '../types';

class PublicMovieService {
  getAll() {
    return AxiosWithoutInterceptor.get("/public/products/");
  }

  getPagination(page, page_size, genre="", english_name="", query="") {
    return AxiosWithoutInterceptor.get(`/public/products/pagination/?page=${page}&page_size=${page_size}&genre=${genre}&english_name=${english_name}&query=${query}`);
  }

  getPopular(page, page_size, english_name="") {
    return AxiosWithoutInterceptor.get(`/public/popularity/products/pagination/?page=${page}&page_size=${page_size}&english_name=${english_name}`);
  }

  get(slug) {
    return AxiosWithoutInterceptor.get(`/public/products/${slug}`);
  }
}

export default new PublicMovieService();

export const fetchReviewFx = createEffect(async ({ title, content }, slug) => {
  try {
    const response = await Axios.post('/reviews/?product="' + slug + '"', {
      title,
      content,
    });

    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (err) {
    return err.response.status;
  }
});