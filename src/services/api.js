import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTUzYzkyMDUxYzVjYTEyYmMxYWVjYTI0N2IzYzk2NSIsInN1YiI6IjY2MWI5Zjk0MGZiMzk4MDE2MjhhMDAyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JVt6L55lEB-15shh_mOQ88x0yJK0Lif4w0TwaSVYV7o",
  },
};

export const fetchTrendingMovies = async (time, page) => {
  const url = `/3/trending/movie/${time}?language=en-US&page=${page}`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMoviesByQuery = async (query, page) => {
  const url = `/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchMoviesById = async (id) => {
  const url = `/3/movie/${id}?language=en-US`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchCredits = async (id) => {
  const url = `/3/movie/${id}/credits?language=en-US`;
  const response = await axios.get(url, options);
  return response.data.cast;
};

export const fetchReviews = async (id, page) => {
  console.log(id, page);
  const url = `/3/movie/${id}/reviews?language=en-US&page=${page}`;
  const response = await axios.get(url, options);
  return response.data.results;
};
