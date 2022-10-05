import { NextPage, GetServerSideProps, GetServerSidePropsResult } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import MoviesDetail from '../../src/components/MoviesDetail/MoviesDetail';
import { TFetchDetailParams, TMovie, TMoviePagePropResult } from '../../type';
import { BASE_IMAGE_URL } from '../../src/utilities/helpers';
import { fetchMovieById } from '../../src/utilities/requests';
type Props = { movie: TMovie; imageProps: any };
const MoviePage: NextPage<Props> = ({ movie, imageProps }: Props) => (
  <MoviesDetail movie={movie} imageProps={imageProps} />
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
