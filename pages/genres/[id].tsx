import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from 'next';
import Navbar from '../../src/components/Navbar/Navbar';
import Movies from '../../src/components/Movies/Movies';
import { TGenres, TMovie, TUserPropResult } from '../../type';
import {
  fetchAllGenres,
  fetchGenresMovies,
  fetchTopRatedMovies,
  fetchTopTrendingMovies,
} from '../../src/utilities/requests';
import Title from '../../src/components/Title/Title';

type Props = {
  genres: TGenres;
  movies: TMovie[];
};

const HomePage: NextPage<Props> = ({ genres, movies }: Props) => {
  return (
    <div>
      <Navbar genres={genres}></Navbar>
      <Title genres={genres}></Title>
      <Movies movies={movies}></Movies>
    </div>
  );
};
export default HomePage;

//Because the path is generated dynamic base on external database, we will use getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  const apiKey = process.env.API_KEY;
  if (typeof apiKey === 'undefined')
    throw new Error('apiKey does not exist in ENV');
  const allGenres = await fetchAllGenres(apiKey);
  const paths = allGenres.map((genre) => ({
    params: { id: genre.id.toString() },
  }));
  return {
    paths,
    fallback: false, //*Look up in doc
  };
};

//We need the props 'movies' which will depends on the external database.
//Depends on the path we will make different call to the database to get these props. Since the path is also depends on external database, we will need getStaticPaths.
//Revalidate options will make this page rebuild every 60 seconds.
export const getStaticProps: GetStaticProps<
  TUserPropResult,
  { id: string }
> = async ({ params }): Promise<GetStaticPropsResult<TUserPropResult>> => {
  const apiKey = process.env.API_KEY;
  if (typeof apiKey === 'undefined')
    throw new Error('apiKey does not exist in ENV');

  try {
    const genres = await fetchAllGenres(apiKey);
    let movies;
    if (typeof params !== 'undefined') {
      if (params.id === 'top-rated') {
        movies = await fetchTopRatedMovies(apiKey);
      } else if (params.id === 'top-trending') {
        movies = await fetchTopTrendingMovies(apiKey);
      } else {
        movies = await fetchGenresMovies(apiKey, params.id);
      }
    }
    return {
      props: {
        genres,
        movies,
      },
      revalidate: 60,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      const err = error as Error;
      throw new Error(err.message);
    }
  }
};
