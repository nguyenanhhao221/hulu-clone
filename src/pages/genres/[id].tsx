import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from 'next';
import type { TCategory, TGenre, TMovie, TUserPropResult } from '../../../type';
import {
  fetchAllGenres,
  fetchByGenres,
  fetchPopular,
  fetchTopRated,
  getUniqueGenres,
} from '../../utilities/requests';
import Home from '../../components/Home/Home';
import { addTopTrendTopRated, BASE_IMAGE_URL } from '../../utilities/helpers';
import { getPlaiceholder } from 'plaiceholder';
import EmptyImg from '../../../public/no-image-photo-template-gray-background-empty-photography-mockup-picture-available-thumbnail-placeholder-blank-sign-237351983.jpg';

type Props = {
  genres: TGenre[][];
  movies: TMovie[][];
};
//Because the path is generated dynamic base on external database, we will use getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  const apiKey = process.env.API_KEY;
  if (typeof apiKey === 'undefined')
    throw new Error('apiKey does not exist in ENV');
  const allGenres = await getUniqueGenres(apiKey, categories);
  const paths = allGenres.map((genre) => ({
    params: { id: genre.id.toString() },
  }));
  return {
    paths,
    fallback: true, //*Look up in doc. blocking mean that only build these path first
  };
};

//We need the props 'movies' which will depends on the external database.
//Depends on the path we will make different call to the database to get these props. Since the path is also depends on external database, we will need getStaticPaths.
//Revalidate options will make this page rebuild every 10 seconds.
export const getStaticProps: GetStaticProps<
  TUserPropResult,
  { id: string }
> = async ({ params }): Promise<GetStaticPropsResult<TUserPropResult>> => {
  const apiKey = process.env.API_KEY;
  if (typeof apiKey === 'undefined')
    throw new Error('apiKey does not exist in ENV');

  try {
    const genres = await fetchAllGenres(apiKey, categories);
    let movies: TMovie[][] | undefined;
    if (typeof params !== 'undefined') {
      if (params.id === 'top-rated') {
        movies = await fetchTopRated(apiKey, categories);
      } else if (params.id === 'popular') {
        movies = await fetchPopular(apiKey, categories);
      } else {
        movies = await fetchByGenres(apiKey, params.id, categories);
      }
    }
    //Logic to add a blur place holder to each movie using PlaiceHolder
    if (movies) {
      movies = await Promise.all(
        movies?.map(
          async (eachCategory) =>
            await Promise.all(
              eachCategory.map(async (movie) => {
                if (!movie.poster_path && !movie.backdrop_path) {
                  return { ...movie, imageProps: EmptyImg };
                }
                const blurData = await getPlaiceholder(
                  movie.backdrop_path
                    ? `${BASE_IMAGE_URL}${movie.backdrop_path}`
                    : `${BASE_IMAGE_URL}${movie.poster_path}`
                );
                return {
                  ...movie,
                  imageProps: { ...blurData.img, blurDataURL: blurData.base64 },
                };
              })
            )
        )
      );
    }
    console.log(genres[0].length + genres[1].length);

    return {
      props: {
        genres: genres.map((genre) =>
          addTopTrendTopRated(
            genre,
            { id: 'popular', name: 'Most Popular' },
            { id: 'top-rated', name: 'Top Rated' }
          )
        ),
        movies,
      },
      revalidate: 10,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);

      throw new Error(error.message);
    } else {
      const err = error as Error;
      throw new Error(err.message);
    }
  }
};

//!THIS WILL BE USED TO QUERY MOVIE AND TV TO TMDB
const categories: TCategory[] = ['movie', 'tv'];

const HomePage: NextPage<Props> = ({ genres, movies }: Props) => {
  return (
    <>
      <Home movies={movies} genres={genres} />
    </>
  );
};
export default HomePage;
