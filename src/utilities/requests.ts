import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import type {
  TDataResponseTMDB,
  TGenre,
  TMovie,
  TFetchDetailParams,
  TCategory,
} from '../../type';
import { getUnique, addTopTrendTopRated } from './helpers';

//Base axios function used to fetch to TMDB, check for category (movie or tv) then assign correct key and value to make the call.
const baseOptions: AxiosRequestConfig = {
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    language: 'en_US',
  },
};
const axiosTMDB = axios.create(baseOptions);

//Get Popular movies and Tv show
export const fetchPopular = async (apiKey: string, categories: TCategory[]) => {
  const options: AxiosRequestConfig = {
    params: {
      api_key: apiKey,
      page: 1,
    },
  };
  const resultArr = await Promise.all(
    categories.map(async (eachCategory) => {
      const urlEndpoints = `/${eachCategory}/popular`;
      const response: AxiosResponse<TDataResponseTMDB> = await axiosTMDB(
        urlEndpoints,
        options
      );
      return response.data.results;
    })
  );
  return resultArr;
};
//Get TopRated movies and Tv show
export const fetchTopRated = async (
  apiKey: string,
  categories: TCategory[]
): Promise<TMovie[][]> => {
  const options: AxiosRequestConfig = {
    params: {
      api_key: apiKey,
      page: 1,
    },
  };
  const resultArr = await Promise.all(
    categories.map(async (eachCategory) => {
      const urlEndpoints = `/${eachCategory}/top_rated`;
      const response: AxiosResponse<TDataResponseTMDB> = await axiosTMDB(
        urlEndpoints,
        options
      );
      return response.data.results;
    })
  );
  return resultArr;
};
//Fetch both genres from TV and Movies categories. Some will be duplicate, we will return an array contain 2 element, each element is an Array of genre
export const fetchAllGenres = async (
  apiKey: string,
  categories: TCategory[]
) => {
  const options: AxiosRequestConfig = {
    params: {
      api_key: apiKey,
    },
  };
  const resultArr = await Promise.all(
    categories.map(async (eachCategory) => {
      const urlEndpoints = `/genre/${eachCategory}/list`;
      const response: AxiosResponse<{ genres: TGenre[] }> = await axiosTMDB(
        urlEndpoints,
        options
      );
      return response.data.genres;
    })
  );
  return resultArr;
};
//Fetch both genres from TV and Movies categories, and merge them into 1 array and just get unique value. This will be use to generate the Path to ISR.
export const getUniqueGenres = async (
  apiKey: string,
  categories: TCategory[]
) => {
  const resultArr = await fetchAllGenres(apiKey, categories);
  const uniqueResult = getUnique(resultArr);
  return addTopTrendTopRated(
    uniqueResult,
    { id: 'popular', name: 'Most Popular' },
    { id: 'top-rated', name: 'Top Rated' }
  );
};

//Fetch movies based on genres
export const fetchByGenres = async (
  apiKey: string,
  genreId: number | string,
  categories: TCategory[]
) => {
  const options: AxiosRequestConfig = {
    params: {
      sort_by: 'popularity.desc',
      api_key: apiKey,
      with_genres: genreId,
    },
  };
  const resultArr = await Promise.all(
    categories.map(async (eachCategory) => {
      const urlEndpoints = `/discover/${eachCategory}`;
      const response: AxiosResponse<TDataResponseTMDB> = await axiosTMDB(
        urlEndpoints,
        options
      );
      return response.data.results;
    })
  );
  return resultArr;
};

export const fetchMovieById = async ({
  apiKey,
  id,
  category,
}: TFetchDetailParams) => {
  const baseURL = `https://api.themoviedb.org/3/${category}`;
  const url = `/${id}`;
  const options: AxiosRequestConfig = {
    params: {
      api_key: apiKey,
      language: 'en-us',
      movie_id: id,
    },
    baseURL,
  };
  try {
    const response: AxiosResponse<TMovie> = await axios(url, options);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      const err = error as Error;
      throw new Error(err.message);
    }
  }
};

//TODO: Clean up because haven't find use case for this
export const fetchTopTrendingMovies = async (apiKey: string) => {
  const topTrendingURL = 'https://api.themoviedb.org/3/trending/all/week';
  const options: AxiosRequestConfig = {
    params: {
      api_key: apiKey,
    },
  };
  const response: AxiosResponse<TDataResponseTMDB> = await axios.get(
    topTrendingURL,
    options
  );
  if (response.status === 200) {
    return response.data.results;
  }
};
