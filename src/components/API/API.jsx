import axios from 'axios';

export const baseURL = 'https://api.themoviedb.org/3/';
const options = {
  params: {
    api_key: 'ed7e21d2b78dbd5c81e3f302822c687c',
  },
};

export const getTrending = async () => {
  try {
    const response = await axios.get(`${baseURL}trending/movie/day`, options);
    return response.data;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
};

export const getSearchMovies = async query => {
  try {
    const response = await axios.get(`${baseURL}search/movie`, {
      params: {
        query: query,
        api_key: options.params.api_key,
      },
    });
    if (response.data.results.length === 0) {
      alert(`Немає фільма з назвою ${query}!`);
    }
    return response.data;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
};

export const getMovieDetails = async id => {
  try {
    const response = await axios.get(`${baseURL}movie/${id}`, options);
    return response.data;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
};

export const getMovieCredits = async id => {
  try {
    const response = await axios.get(`${baseURL}movie/${id}/credits`, options);
    return response.data;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(`${baseURL}movie/${id}/reviews `, options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
};
