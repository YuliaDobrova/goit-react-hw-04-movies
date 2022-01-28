import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
// console.log('process.env', process.env);
// console.log('API_KEY', API_KEY);

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
    );
    // console.log('response.data.results', response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchByQuery = async query => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`,
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieReview = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`,
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};
