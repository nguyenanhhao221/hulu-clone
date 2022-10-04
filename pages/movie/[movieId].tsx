import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { NextPage, GetServerSideProps, GetServerSidePropsResult } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import MoviesDetail from '../../src/components/MoviesDetail/MoviesDetail';
import { TMovie, TMoviePagePropResult } from '../../type';
import { BASE_IMAGE_URL } from '../../src/utilities/helpers';
type Props = { movie: TMovie; imageProps: any };
const MoviePage: NextPage<Props> = ({ movie, imageProps }: Props) => (
  <MoviesDetail movie={movie} imageProps={imageProps} />
);
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
      const { backdrop_path, poster_path } = response;
      //TODO FINISH BLUR
      const { base64, img } = await getPlaiceholder(
        `${BASE_IMAGE_URL}${backdrop_path ? backdrop_path : poster_path}`
      );

      return {
        props: {
          movie: response,
          imageProps: { blurDataURL: base64, ...img },
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
