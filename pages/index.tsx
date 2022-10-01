import axios, { AxiosResponse } from 'axios';
import type { NextPage, GetStaticPropsContext } from 'next';
import Header from '../components/Header/Header';
import Movies from '../components/Movies/Movies';
import Navbar from '../components/Navbar/Navbar';
import type { TDataTopRated, TGenres, TMovie } from '../type';
import { dummyData } from '../utilities/dummyData';
import { fetchAllGenres, fetchTopRatedMovies } from '../utilities/requests';

//TODO Remove when make actual API call
type Props = {
  genres: TGenres;
  movies: TMovie[];
};
const Home: NextPage<Props> = ({ genres, movies }) => {
  return (
    <div>
      <Navbar genres={genres}></Navbar>
      <Movies movies={movies}></Movies>
    </div>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const apiKey = process.env.API_KEY;
  if (typeof apiKey === 'undefined')
    throw new Error('apiKey does not exist in ENV');
  try {
    const response = await fetchAllGenres(apiKey);
    const topRated = await fetchTopRatedMovies(apiKey);
    return {
      props: {
        genres: response,
        movies: topRated,
      },
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

export default Home;
