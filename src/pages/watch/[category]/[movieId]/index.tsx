import { NextPage, GetServerSideProps, GetServerSidePropsResult } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import MoviesDetail from '../../../../components/MoviesDetail/MoviesDetail';
import type {
    TCategory,
    TFetchDetailParams,
    TImageProps,
    TMovie,
    TMoviePagePropResult,
} from '../../../../../type';
import { BASE_IMAGE_URL } from '../../../../utilities/helpers';
import { fetchMovieById } from '../../../../utilities/requests';

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
    { movieId: string; category: TCategory }
> = async (
    context
): Promise<GetServerSidePropsResult<TMoviePagePropResult>> => {
    const apiKey = process.env.API_KEY;
    if (typeof apiKey === 'undefined')
        throw new Error('apiKey does not exist in ENV');

    try {
        if (typeof context.params !== 'undefined') {
            const paramsFetchDetail: TFetchDetailParams = {
                apiKey,
                id: context.params.movieId,
                category: context.params.category,
            };
            const response = await fetchMovieById(paramsFetchDetail); //Fetch the movie or tv show base on ID and category
            //Base on the response, make additional call to get Social Media. Movie will have different endpoints compare with TV

            // Getting the blur effect to each image via getPlaiceHolder
            const { backdrop_path, poster_path } = response;
            const backdropImageProps = backdrop_path
                ? await getPlaiceholder(`${BASE_IMAGE_URL}${backdrop_path}`)
                : false;
            const posterImageProps = poster_path
                ? await getPlaiceholder(`${BASE_IMAGE_URL}${poster_path}`)
                : false;
            return {
                props: {
                    movie: {
                        ...response,
                        seasons: response.seasons?.reverse(),
                        aggregate_credits: {
                            cast:
                                response?.aggregate_credits?.cast?.slice(
                                    0,
                                    9
                                ) || [],
                            crew: [],
                        },
                    },
                    backdropImagesProps: backdropImageProps
                        ? {
                              blurDataURL: backdropImageProps.base64,
                              ...backdropImageProps.img,
                          }
                        : false,
                    posterImagesProps: posterImageProps
                        ? {
                              blurDataURL: posterImageProps.base64,
                              ...posterImageProps.img,
                          }
                        : false,
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
