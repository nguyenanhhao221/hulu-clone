import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { TDataTopRated, TGenres } from '../type';
import { getUnique } from './helpers';

const fetchGenres = async (url: string, apiKey: string) => {
  try {
    const response: AxiosResponse<{ genres: TGenres }> = await axios.get(url, {
      params: {
        api_key: apiKey,
        language: 'en_US',
      },
    });
    if (response.status === 200) {
      const genres = response.data.genres;
      return genres;
    }
    throw new Error('Network Error');
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      const err = error as Error;
      throw new Error(err.message);
    }
  }
};
export const fetchAllGenres = async (apiKey: string) => {
  const genresMoviesURL = 'https://api.themoviedb.org/3/genre/movie/list';
  const genresTvURL = 'https://api.themoviedb.org/3/genre/tv/list';
  try {
    const result = await Promise.all([
      fetchGenres(genresMoviesURL, apiKey),
      fetchGenres(genresTvURL, apiKey),
    ]);
    return getUnique(result);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      const err = error as Error;
      throw new Error(err.message);
    }
  }
};

export const fetchTopRatedMovies = async (apiKey: string) => {
  const topRatedURL = 'https://api.themoviedb.org/3/movie/top_rated';
  const options: AxiosRequestConfig = {
    params: {
      api_key: apiKey,
      language: 'en-US',
      page: 1,
    },
  };
  try {
    const response: AxiosResponse<TDataTopRated> = await axios.get(
      topRatedURL,
      options
    );
    if (response.status === 200) {
      return response.data.results;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      const err = error as Error;
      throw new Error(err.message);
    }
  }
};
