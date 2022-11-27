import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'ed7e21d2b78dbd5c81e3f302822c687c',
  },
});

export const getTrending = async () => {
  try {
    const response = await instance.get(`trending/movie/day`);
    return response.data;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
};

export const getSearchMovies = async query => {
  try {
    const response = await instance.get(`search/movie`, {
      params: {
        query: query,
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
    const response = await instance.get(`movie/${id}`);
    return response.data;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
};

export const getMovieCredits = async id => {
  try {
    const response = await instance.get(`movie/${id}/credits`);
    return response.data;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(`movie/${id}/reviews`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`${error.name} : ${error.message}`);
  }
};
