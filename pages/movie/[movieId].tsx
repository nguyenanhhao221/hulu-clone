import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { NextPage, GetServerSideProps, GetServerSidePropsResult } from 'next';
import { TMovie, TMoviePagePropResult } from '../../type';

type Props = { movie: TMovie };
const MoviePage: NextPage<Props> = ({ movie }: Props) => {
  return <div>{movie.id}</div>;
};
export default MoviePage;

export const fetchMovieById = async (apiKey: string, movieId: string) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const options: AxiosRequestConfig = {
    params: {
      api_key: apiKey,
      language: 'en-us',
      movie_id: movieId,
    },
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

export const getServerSideProps: GetServerSideProps<
  TMoviePagePropResult,
  { movieId: string }
> = async ({
  params,
}): Promise<GetServerSidePropsResult<TMoviePagePropResult>> => {
  const apiKey = process.env.API_KEY;
  if (typeof apiKey === 'undefined')
    throw new Error('apiKey does not exist in ENV');
  try {
    if (typeof params !== 'undefined') {
      const response = await fetchMovieById(apiKey, params.movieId);
      return {
        props: {
          movie: response,
        },
      };
    }
    throw new Error('message: Params is undefined');
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      const err = error as Error;
      throw new Error(err.message);
    }
  }
};
