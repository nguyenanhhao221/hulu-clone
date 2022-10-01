import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import Navbar from '../../components/Navbar/Navbar';
import Movies from '../../components/Movies/Movies';
import { TGenres, TMovie } from '../../type';
import { addTopTrendTopRated } from '../../utilities/helpers';
import { fetchAllGenres, fetchGenresMovies } from '../../utilities/requests';
import Title from '../../components/Title/Title';
type Props = {
  genres: TGenres;
  movies: TMovie[];
};
const genreID: NextPage<Props> = ({ genres, movies }: Props) => {
  return (
    <div>
      <Navbar genres={genres}></Navbar>
      <Title genres={genres}></Title>
      <Movies movies={movies}></Movies>
    </div>
  );
};
export default genreID;

export const getStaticPaths: GetStaticPaths = async () => {
  const apiKey = process.env.API_KEY;
  if (typeof apiKey === 'undefined')
    throw new Error('apiKey does not exist in ENV');
  const response = await fetchAllGenres(apiKey);
  const paths = response.map((genre) => ({
    params: { id: genre.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const apiKey = process.env.API_KEY;
  if (typeof apiKey === 'undefined')
    throw new Error('apiKey does not exist in ENV');
  try {
    const response = await fetchAllGenres(apiKey);
    const topRated = await fetchGenresMovies(
      apiKey,
      context.params?.id as unknown as number
    );
    return {
      props: {
        genres: addTopTrendTopRated(
          response,
          { id: 'Top Rated', name: 'Top Rated' },
          { id: 'Top Trend', name: 'Top Trend' }
        ),
        movies: topRated,
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
