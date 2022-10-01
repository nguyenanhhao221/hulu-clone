import axios, { AxiosResponse } from 'axios';
import { TGenres } from '../type';

const getUnique = (arr: (TGenres | undefined)[]) => {
  //* Merge 1 level deep of nested array
  const mergeArr = arr.flat(1);
  const arrayUniqueByKey = [
    ...new Map(mergeArr.map((item) => [item?.id, item])).values(),
  ];
  return arrayUniqueByKey;
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
    throw new Error(error);
  }
};
export const fetchAllGenres = async (apiKey: string) => {
  const genresMoviesURL = 'https://api.themoviedb.org/3/genre/movie/list';
  const genresTvURL = 'https://api.themoviedb.org/3/genre/tv/list';
  const result = await Promise.all([
    fetchGenres(genresMoviesURL, apiKey),
    fetchGenres(genresTvURL, apiKey),
  ]);

  return getUnique(result);
};
// export default requests;
