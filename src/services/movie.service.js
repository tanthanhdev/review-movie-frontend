import apiPublic from "./callApiPublic";

class PublicMovieService {
  getAll() {
    return apiPublic.get("/public/products/");
  }

  getPagination(page, page_size, genre="", english_name="", release_date="") {
    return apiPublic.get(`/public/products/pagination/?page=${page}&page_size=${page_size}&genre=${genre}&english_name=${english_name}&release_date=${release_date}`);
  }

  getPopular(page, page_size, english_name="") {
    return apiPublic.get(`/public/popularity/products/pagination/?page=${page}&page_size=${page_size}&english_name=${english_name}`);
  }

  get(slug) {
    return apiPublic.get(`/public/products/${slug}`);
  }
}

export default new PublicMovieService();