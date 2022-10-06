import { NextPage, GetServerSideProps, GetServerSidePropsResult } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import MoviesDetail from '../../components/MoviesDetail/MoviesDetail';
import type {
  TFetchDetailParams,
  TImageProps,
  TMovie,
  TMoviePagePropResult,
} from '../../../type';
import { BASE_IMAGE_URL } from '../../utilities/helpers';
import { fetchMovieById } from '../../utilities/requests';
type Props = {
  movie: TMovie;
  backdropImagesProps: TImageProps;
  posterImagesProps: TImageProps;
};
const MoviePage: NextPage<Props> = ({
  movie,
  backdropImagesProps,
  posterImagesProps,
}: Props) => (
  <MoviesDetail
    movie={movie}
    backdropImagesProps={backdropImagesProps}
    posterImagesProps={posterImagesProps}
  />
);
export default MoviePage;

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
      const paramsFetchDetail: TFetchDetailParams = {
        apiKey,
        id: params.movieId,
        category: 'movie',
      };
      const response = await fetchMovieById(paramsFetchDetail);
      const { backdrop_path, poster_path } = response;
      const [backdropImageProps, posterImageProps] = await Promise.all([
        getPlaiceholder(`${BASE_IMAGE_URL}${backdrop_path}`),
        getPlaiceholder(`${BASE_IMAGE_URL}${poster_path}`),
      ]);
      return {
        props: {
          movie: response,
          backdropImagesProps: {
            blurDataURL: backdropImageProps.base64,
            ...backdropImageProps.img,
          },
          posterImagesProps: {
            blurDataURL: posterImageProps.base64,
            ...posterImageProps.img,
          },
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
