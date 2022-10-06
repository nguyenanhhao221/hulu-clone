import axios, {
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import type { TDataTopRated, TGenres, TMovie, TFetchDetailParams, TCategory } from '../../type';
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
    }
  }
 const resultArr = await Promise.all(categories.map(async (eachCategory) => {
    const urlEndpoints = `/${eachCategory}/popular`
    const response: AxiosResponse<TDataTopRated> = await  axiosTMDB(urlEndpoints, options);
    return response.data.results
  }))
  return resultArr
};
//Get TopRated movies and Tv show 
export const fetchTopRated = async (apiKey: string, categories: TCategory[]) => {
  const options: AxiosRequestConfig = {
    params: {
      api_key: apiKey,
      page: 1,
    }
  }
  const resultArr = await Promise.all(categories.map(async (eachCategory) => {
   const urlEndpoints = `/${eachCategory}/top_rated`
    const response: AxiosResponse<TDataTopRated> = await  axiosTMDB(urlEndpoints, options);
    return response.data.results
  }))
  return resultArr
};

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
export const fetchAllGenres = async (apiKey: string, categories: TCategory[]) => {
  // const genresMoviesURL = 'https://api.themoviedb.org/3/genre/movie/list';
  // const genresTvURL = 'https://api.themoviedb.org/3/genre/tv/list';
  // try {
  //   const result = await Promise.all([
  //     fetchGenres(genresMoviesURL, apiKey),
  //     fetchGenres(genresTvURL, apiKey),
  //   ]);
  //   const uniqueResult = getUnique(result);
  //   return addTopTrendTopRated(
  //     uniqueResult,
  //     { id: 'top-rated', name: 'Top Rated' },
  //     { id: 'top-trend', name: 'Top Trend' }
  //   );
  // } catch (error) {
  //   if (error instanceof Error) {
  //     throw new Error(error.message);
  //   } else {
  //     const err = error as Error;
  //     throw new Error(err.message);
  //   }
  // }
  const options: AxiosRequestConfig = {
    params: {
      api_key: apiKey,
    }
  }
  const resultArr = await Promise.all(categories.map(async (eachCategory) => {
   const urlEndpoints = `/genre/${eachCategory}/list`
    const response: AxiosResponse<{ genres: TGenres }>  = await  axiosTMDB(urlEndpoints, options);
    return response.data.genres
  }))
    const uniqueResult = getUnique(resultArr);
    return addTopTrendTopRated(
      uniqueResult,
      { id: 'top-rated', name: 'Top Rated' },
      { id: 'top-trend', name: 'Top Trend' }
    );
};


export const fetchTopTrendingMovies = async (apiKey: string) => {
  const topTrendingURL = 'https://api.themoviedb.org/3/trending/all/week';
  const options: AxiosRequestConfig = {
    params: {
      api_key: apiKey,
    },
  };
  const response: AxiosResponse<TDataTopRated> = await axios.get(
    topTrendingURL,
    options
  );
  if (response.status === 200) {
    return response.data.results;
  }
};
//Fetch movies based on genres
export const fetchGenresMovies = async (
  apiKey: string,
  genreId: number | string
) => {
  const url = 'https://api.themoviedb.org/3/discover/movie';
  const options: AxiosRequestConfig = {
    params: {
      api_key: apiKey,
      language: 'en-US',
      sort_by: 'popularity.desc',
      with_genres: genreId,
    },
  };
  try {
    const response: AxiosResponse<TDataTopRated> = await axios.get(
      url,
      options
    );
    return response.data.results;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      const err = error as Error;
      throw new Error(err.message);
    }
  }
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
