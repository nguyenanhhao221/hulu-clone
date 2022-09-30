import axios, { AxiosResponse } from 'axios';
import type {
  GetStaticProps,
  NextPage,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Movies from '../components/Movies/Movies';
import Navbar from '../components/Navbar/Navbar';
import type { TGenres } from '../type';
import { dummyData } from '../utilities/dummyData';

//TODO Remove when make actual API call
type Props = {
  genres: TGenres;
};
const Home: NextPage<Props> = ({ genres }) => {
  return (
    <div>
      <Header></Header>
      <Navbar genres={genres}></Navbar>
      <Navbar></Navbar>
    </div>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list';
  try {
    const response: AxiosResponse<{ genres: TGenres }> = await axios.get(url, {
      params: {
        api_key: process.env.API_KEY,
        language: 'en_US',
      },
    });
    if (response.status === 200) {
      const genres = response.data.genres;
      return {
        props: {
          genres,
        },
      };
    }
    throw new Error('Network Error');
  } catch (error) {
    console.error(error);
  }
};

export default Home;
